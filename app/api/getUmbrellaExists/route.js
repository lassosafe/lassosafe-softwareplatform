import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { umbrellaInfo } = await req.json();
    let user = await Users.findOne({ email: umbrellaInfo, isUmbrella: true });
    console.log(umbrellaInfo);
    if (umbrellaInfo.length !== 24) {
      return NextResponse.json({ user });
    }
    if (!user) {
      user = await Users.findOne({
        _id: new ObjectId(umbrellaInfo),
        isUmbrella: true,
      });
    }
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
