import mongoose, { Schema, models } from "mongoose";

const individualSchema = new Schema(
  {
    evaluationId: {
      type: String,
      required: true,
    },
    ageMin: {
      type: Number,
      required: true,
    },
    ageMax: {
      type: Number,
      required: true,
    },
    athleteLevel: {
      type: String,
      required: true,
    },
    sportSeason: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Individual =
  models.Individual || mongoose.model("Individual", individualSchema);
export default Individual;
