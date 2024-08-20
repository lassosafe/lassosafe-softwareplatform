import mongoose, { Schema, models } from "mongoose";

const pillarScoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    pillarId: {
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

const PillarScore =
  models.PillarScore || mongoose.model("PillarScore", pillarScoreSchema);
export default PillarScore;
