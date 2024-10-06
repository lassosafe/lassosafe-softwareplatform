"use client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { fetchData } from "next-auth/client/_utils";

type props = {
  priceId: string;
  price: string;
  description: string;
};
const SubscribeComponent = ({ priceId, price, description }: props) => {
  const handleSubmit = async () => {
    const stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );

    const stripe = await stripePromise;
    if (!stripe) {
      return;
    }

    const response = await fetch("/api/checkoutSession", {
      method: "POST",
      body: JSON.stringify({ priceId }),
    });
    const data = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
      //setLoading(false);
    }
  };
  return (
    <div>
      Click Below button to get {description}
      <button onClick={handleSubmit}>Upgrade in {price}</button>
    </div>
  );
};
export default SubscribeComponent;
