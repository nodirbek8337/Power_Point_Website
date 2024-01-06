import { Router } from "express";
import { sample_videos } from "../data";
import asyncHandler from "express-async-handler";
import { VideoModel } from "../models/video.model";
const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const videosCount = await VideoModel.countDocuments();
    if (videosCount > 0) {
      res.send("Seed is already done! Videos");
      return;
    }

    await VideoModel.create(sample_videos);
    res.send("Seed is done!");
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const videos = await VideoModel.find();
    res.send(videos);
  })
);

router.get(
  "/:videoId",
  asyncHandler(async (req, res) => {
    const video = await VideoModel.findById(req.params.videoId);
    res.send(video);
  })
);

export default router;
