import mongoose, { Schema, models } from "mongoose";

const attributeScoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    attributeId: {
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

const AttributeScore =
  models.AttributeScore ||
  mongoose.model("AttributeScore", attributeScoreSchema);
export default AttributeScore;
