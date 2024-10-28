import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import ViewerToClient from "../../../models/viewerToClient";
import Users from "../../../models/users";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { viewerId, clientEmail } = await req.json();
    const user = await Users.findOne({ email: clientEmail });
    console.log(viewerId);
    console.log(clientEmail);
    console.log(user);
    const clientId = user._id;

    await ViewerToClient.create({
      viewerId,
      clientId,
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
