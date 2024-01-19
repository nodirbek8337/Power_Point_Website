import { Schema, model } from "mongoose";

export interface Video {
  id: string;
  videoNum: Number;
  imgUrl: string;
  videoUrl: string;
  name: string;
  description: string;
}

export const VideoSchema = new Schema<Video>(
  {
    videoNum: { type: String, required: true },
    imgUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
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
