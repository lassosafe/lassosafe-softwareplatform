// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  //console.log(req.json());
  const { stripeSessionId } = await req.json();
  console.log("sessionid: ");
  console.log(stripeSessionId);

  try {
    const session = await stripe.checkout.sessions.retrieve(stripeSessionId);
    console.log("session");
    console.log(session);
    const customerEmail = session.customer_details.email;
    const customerName = session.customer_details.name;
    return NextResponse.json({ customerEmail, customerName }, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
