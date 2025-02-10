/**
 * Component user sees if their Stripe payment has failed
 * upon registration
 */
import Image from "next/image";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";
import Footer from "../Footer/Footer";

import "./PaymentFailed.scss";

export default function PaymentFailed() {
  return (
    <div>
      <header className="evaluation-header">
        <Image
          src={horizontallogowhite}
          alt="horizontallogo"
          objectFit="contain"
          className="header-logo"
        ></Image>
      </header>
      <div style={{ marginTop: "5rem", marginLeft: "2rem" }}>
        <p>We are sorry but, your payment did not go through successfully.</p>
        <p>
          Please contact{" "}
          <a className="email-contact" href="mailto: pminix@lassosafe.com">
            pminix@lassosafe.com
          </a>{" "}
          for assistance.
        </p>
      </div>
      <Footer />
    </div>
  );
}
