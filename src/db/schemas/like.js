import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const LikeSchema = new Schema(
  {
    // 좋아요를 클릭한 user의 ObjectId
    currentUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // 좋아요를 받은 user의 ObjectId
    otherUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const LikeModel = model("Like", LikeSchema);

export { LikeModel };
