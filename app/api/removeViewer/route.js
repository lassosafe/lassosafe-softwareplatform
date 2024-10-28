import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import ViewerToClient from "../../../models/viewerToClient";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { clientEmail, viewerId } = await req.json();
    const user = await Users.findOne({ email: clientEmail });
    console.log("vid:", viewerId);
    //console.log("email", email);
    //console.log("user", user);
    const clientId = user._id;
    console.log("clientid", clientId);

    const result = await ViewerToClient.deleteOne({
      clientId,
      viewerId: new ObjectId(viewerId),
    });
    console.log(result);
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
