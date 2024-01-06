import { Schema, model } from "mongoose";

export interface Video {
  id: string;
  imgUrl: string;
  videoUrl: string;
  videoName: string;
  videoDesc: string;
  tutorialImg1: string;
  tutorialImg2: string;
  tutorialImg3: string;
  tutorialImgDesc: string;
}

export const VideoSchema = new Schema<Video>(
  {
    imgUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    videoName: { type: String, required: true },
    videoDesc: { type: String, required: true },
    tutorialImg1: { type: String, required: false },
    tutorialImg2: { type: String, required: false },
    tutorialImg3: { type: String, required: false },
    tutorialImgDesc: { type: String, required: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const VideoModel = model<Video>("video", VideoSchema);
