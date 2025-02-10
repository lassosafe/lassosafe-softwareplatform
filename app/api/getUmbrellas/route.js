import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import UmbrellaToClient from "../../../models/umbrellaToClient";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await Users.findOne({ email });
    const clientId = user._id;

    const umbrellas = await UmbrellaToClient.find({
      clientId,
    });
    let umbrellasObj = [];
    for (let i = 0; i < umbrellas.length; i++) {
      const umbrellaId = umbrellas[i].umbrellaId;
      const v = await Users.findOne({ _id: new ObjectId(umbrellaId) });
      if (v) {
        umbrellasObj.push(v);
      }
    }
    return NextResponse.json({ umbrellasObj });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
