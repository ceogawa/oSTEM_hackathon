import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      trim: true,
    },
  },
  { collection: "community_members" }
);

const User = mongoose.model("User", UserSchema);

export default mongoose.model("User", UserSchema);