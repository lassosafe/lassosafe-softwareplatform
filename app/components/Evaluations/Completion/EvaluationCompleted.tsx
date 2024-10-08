import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";
import Image from "next/image";

import "./EvaluationCompleted.scss";
import Footer from "../../Footer/Footer";

export default function EvaluationCompleted() {
  return (
    <>
      <header className="evaluation-header">
        <Image
          src={horizontallogowhite}
          alt="horizontallogo"
          objectFit="contain"
          className="header-logo"
        ></Image>
      </header>
      <div className="evaluation-completed-container">
        <h2 className="title">The evaluation is complete!</h2>
        <p>
          Please use this confirmation code if needed to confirm you have
          completed the evaluation:{" "}
          <b>{Math.floor(10000000 + Math.random() * 90000000)}</b>
        </p>
        <p className="thank-you-text">
          Thank you for your participation in the Lasso Safe Athlete Wellness
          Evaluation. Your feedback will pave the way for positive changes in
          the sporting community, ensuring a more inclusive and supportive
          environment for all athletes.
        </p>
        <p className="thank-you-text-2">
          Your anonymous responses will be sent to your organization to help
          inform future changes. Your responses and participation are also
          helping to create a safer environment for all future athletes. Thank
          you again, and if you have any questions about the evaluation or
          issues to report, please send to{" "}
          <a href="mailto:info@lassosafe.com" className="lasso-safe-email">
            info@lassosafe.com
          </a>
          .
        </p>
        {/* <a
          className="finish-button"
          href="https://lassosafe.com/athlete-user-experience-evaluation/"
        >
          Finish
        </a> */}
      </div>
      <Footer />
    </>
  );
}
