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
      <p>We are sorry but, your payment did not go through.</p>
      <p>
        Please contact{" "}
        <a className="email-contact" href="mailto: pminix@lassosafe.com">
          pminix@lassosafe.com
        </a>{" "}
        for assistance.
      </p>
      <Footer />
    </div>
  );
}
