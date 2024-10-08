import mongoose, { Schema, models } from "mongoose";

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    stripeSubscriptionId: {
      type: String,
      required: true,
    },
    accountCreationDate: {
      type: Date,
      required: true,
    },
    hasCanceled: {
      type: Boolean,
      required: true,
    },
    accountExpirationDate: {
      type: Date,
      required: true,
    },
    numberParticipants: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = models.Users || mongoose.model("Users", usersSchema);
export default Users;
