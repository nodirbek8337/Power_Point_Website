import { Router } from "express";
import { VideoModel } from "../models/video.model";
const router = Router();

// Hamma ma'lumotni olish
router.get("/", async (req, res) => {
  const videos = await VideoModel.find();
  res.json(videos);
});

// ma'lumot qo'shish
router.post("/", async (req, res) => {
  const video = new VideoModel({
    videoNum: req.body.videoNum,
    imgUrl: req.body.imgUrl,
    videoUrl: req.body.videoUrl,
    name: req.body.name,
    description: req.body.description,
  });

  const savedVideo = await video.save();
  res.status(201).json(savedVideo);
});

// ma'lumotni id siz bo'yicha topish
router.get("/:id", async (req, res) => {
  const videos = await VideoModel.find();
  const video = videos.find((v) => v.id === req.params.id);
  if (!video) {
    res.status(404).send("Berilgan ID bo'yicha video mavjud emas!!!");
  } else {
    res.send(video);
  }
});

// ma'lumot id si bo'yicha o'chirish
router.delete("/:id", async (req, res) => {
  const videoId = req.params.id;

  try {
    const deletedVideo = await VideoModel.findByIdAndDelete(videoId);

    if (deletedVideo) {
      res.status(200).json({ success: true, message: "Video o'chirildi." });
    } else {
      res.status(404).json({ success: false, message: "Video topilmadi." });
    }
  } catch (error) {
    console.error("Video o'chirishda xatolik:", error);
    res.status(500).json({ success: false, message: "Server xatosi." });
  }
});

export default router;
