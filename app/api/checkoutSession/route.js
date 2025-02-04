// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const firstYearPlatformFeeTest = {
  price: "price_1Q72cwDtt4SMJazLJPKOOW6k",
  quantity: 1,
};

const firstYearPlatformFee = {
  price: "price_1QH5jHDtt4SMJazLpBp1tnKn",
  quantity: 1,
};

const recurringPlatformFeeTest = {
  price: "price_1Q72fRDtt4SMJazL3LCYuT0K",
  quantity: 1,
};

const recurringPlatformFee = {
  price: "price_1QH5kGDtt4SMJazL8pgrGAms",
  quantity: 1,
};

const participantFeePriceIdTest = "price_1Q72rLDtt4SMJazLTqY5nCjb";

const annualParticipantPriceId = "price_1QH5mSDtt4SMJazLYNJf01gj";
const monthlyParticipantPriceId = "price_1QOxlADtt4SMJazLbODycAY0";

export async function POST(req) {
  const { numParticipants, paymentFrequencyString } = await req.json();

  let participantFeePriceId;
  if (paymentFrequencyString.includes("Monthly")) {
    participantFeePriceId = monthlyParticipantPriceId;
  } else {
    participantFeePriceId = annualParticipantPriceId;
  }

  const participantFee = {
    price: participantFeePriceId,
    quantity: numParticipants,
  };

  //console.log(numParticipants);
  //console.log(participantFee);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [recurringPlatformFee, firstYearPlatformFee, participantFee],
      success_url: `${process.env.NEXT_PUBLIC_AUTH_URL}/pages/register?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_AUTH_URL}/pages/paymentFailed`,
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    //console.log(err)
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
