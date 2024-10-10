import mongoose, { Schema, models } from "mongoose";

const viewersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    clientIds: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Viewers = models.Viewers || mongoose.model("Viewers", viewersSchema);
export default Viewers;
