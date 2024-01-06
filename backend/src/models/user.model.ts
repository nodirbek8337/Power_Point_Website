import { Schema, model } from "mongoose";

export interface User {
  id: string;
  username: string;
  password: string;
  token: string;
  isAdmin: boolean;
}

export const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
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

export const UserModel = model<User>("user", UserSchema);
