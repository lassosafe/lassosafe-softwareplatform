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
    const stripeSubscriptionId = session.subscription;

    const subscription = await stripe.subscriptions.retrieve(
      stripeSubscriptionId
    );

    console.log("items");
    console.log(subscription.items.data);
    const numberParticipants = subscription.items.data.find(
      (item) => item.price.id === "price_1Q72rLDtt4SMJazLTqY5nCjb"
    ).quantity;
    console.log(numberParticipants);

    return NextResponse.json(
      { customerEmail, customerName, stripeSubscriptionId, numberParticipants },
      { status: 200 }
    );
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
