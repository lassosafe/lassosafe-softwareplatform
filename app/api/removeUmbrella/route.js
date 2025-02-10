import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import UmbrellaToClient from "../../../models/umbrellaToClient";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { clientEmail, umbrellaId } = await req.json();
    const user = await Users.findOne({ email: clientEmail });
    console.log("vid:", umbrellaId);
    //console.log("email", email);
    //console.log("user", user);
    const clientId = user._id;
    console.log("clientid", clientId);

    const result = await UmbrellaToClient.deleteOne({
      clientId,
      umbrellaId: new ObjectId(umbrellaId),
    });
    console.log(result);
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
