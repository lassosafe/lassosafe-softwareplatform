"use client";
import UmbrellaSubscription from "@/app/components/Payment/UmbrellaSubscription";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function UmbrellaSubscriptionPage() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
      <UmbrellaSubscription />
    </Elements>
  );
}
