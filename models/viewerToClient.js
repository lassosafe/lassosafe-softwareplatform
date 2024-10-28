import mongoose, { Schema, models } from "mongoose";

const viewerToClientSchema = new Schema(
  {
    viewerId: {
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

const ViewerToClient =
  models.ViewerToClient ||
  mongoose.model("ViewerToClient", viewerToClientSchema);
export default ViewerToClient;
