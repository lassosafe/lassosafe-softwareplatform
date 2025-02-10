import mongoose, { Schema, models } from "mongoose";

const umbrellaToClientSchema = new Schema(
  {
    umbrellaId: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UmbrellaToClient =
  models.UmbrellaToClient ||
  mongoose.model("UmbrellaToClient", umbrellaToClientSchema);
export default UmbrellaToClient;
