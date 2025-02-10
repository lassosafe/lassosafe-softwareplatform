import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import UmbrellaToClient from "../../../models/umbrellaToClient";
import Users from "../../../models/users";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { umbrellaId, clientEmail } = await req.json();
    const user = await Users.findOne({ email: clientEmail });
    console.log(umbrellaId);
    console.log(clientEmail);
    console.log(user);
    const clientId = user._id;

    await UmbrellaToClient.create({
      umbrellaId,
      clientId,
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
