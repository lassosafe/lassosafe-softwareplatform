import mongoose, { Schema, models } from "mongoose";

const categoryScoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    individualId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryScore =
  models.CategoryScore || mongoose.model("CategoryScore", categoryScoreSchema);
export default CategoryScore;
