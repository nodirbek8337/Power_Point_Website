import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";
const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
      res.send("Seed is already done! Users");
      return;
    }

    await UserModel.create(sample_users);
    res.send("Seed is done!");
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const body = req.body;
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username, password });
    if (user) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(400).send("User name or password is not valid!!!");
    }
  })
);

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      username: user.username,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );
  user.token = token;
  return user;
};

export default router;
