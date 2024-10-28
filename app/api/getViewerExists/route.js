import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { viewerInfo } = await req.json();
    let user = await Users.findOne({ email: viewerInfo, isViewer: true });
    console.log(viewerInfo);
    if (viewerInfo.length !== 24) {
      return NextResponse.json({ user });
    }
    if (!user) {
      user = await Users.findOne({
        _id: new ObjectId(viewerInfo),
        isViewer: true,
      });
    }
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
