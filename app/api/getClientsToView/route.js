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
    //console.log("email", email);
    //console.log("user", user);
    const umbrellaId = user._id;
    //console.log("clientid", clientId);

    const clients = await UmbrellaToClient.find({
      umbrellaId,
    });
    let clientsObj = [];
    for (let i = 0; i < clients.length; i++) {
      const clientId = clients[i].clientId;
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
