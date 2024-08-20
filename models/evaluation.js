import mongoose, { Schema, models } from "mongoose";

const evaluationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    categoryIds: {
      type: [String],
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Evaluation =
  models.Evaluation || mongoose.model("Evaluation", evaluationSchema);
export default Evaluation;
