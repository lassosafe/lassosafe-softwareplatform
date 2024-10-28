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
    const viewerId = user._id;
    //console.log("clientid", clientId);

    const clients = await ViewerToClient.find({
      viewerId,
    });
    //console.log(viewers);
    let clientsObj = [];
    for (let i = 0; i < clients.length; i++) {
      //console.log("viewer", viewers[i]);
      const clientId = clients[i].clientId;
      //console.log("vid:", viewerId);
      const c = await Users.findOne({ _id: new ObjectId(clientId) });
      //console.log("v: ", v);
      if (c) {
        clientsObj.push(c);
      }
    }
    console.log(clientsObj);
    return NextResponse.json({ clientsObj });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
