import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import ViewerToClient from "../../../models/viewerToClient";
import Users from "../../../models/users";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await Users.findOne({ email });
    //console.log(viewerId);
    //console.log("email", email);
    //console.log("user", user);
    const clientId = user._id;
    //console.log("clientid", clientId);

    const viewers = await ViewerToClient.find({
      clientId,
    });
    //console.log(viewers);
    let viewersObj = [];
    for (let i = 0; i < viewers.length; i++) {
      //console.log("viewer", viewers[i]);
      const viewerId = viewers[i].viewerId;
      //console.log("vid:", viewerId);
      const v = await Users.findOne({ _id: new ObjectId(viewerId) });
      //console.log("v: ", v);
      if (v) {
        viewersObj.push(v);
      }
    }
    //console.log(viewersObj);
    return NextResponse.json({ viewersObj });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
