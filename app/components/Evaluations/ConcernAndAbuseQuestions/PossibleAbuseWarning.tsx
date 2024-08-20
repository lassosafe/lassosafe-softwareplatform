import { Button } from "@nextui-org/react";

import "./PossibleAbuseWarning.scss";

type PossibleAbuseWarningProps = {
  onContinueAbuseQuestions: () => void;
  onSkipAbuseQuestions: () => void;
};

export function PossibleAbuseWarning({
  onContinueAbuseQuestions,
  onSkipAbuseQuestions,
}: PossibleAbuseWarningProps) {
  return (
    <div className="possible-abuse-container">
      <h2 className="possible-misconduct">
        Possible misconduct or abuse occurring in your sport culture.
      </h2>
      <p>
        Your answers have indicated possible misconduct or abuse withing your
        sporting experience.
      </p>

      <p className="help-learn-more-text">
        If you would like to help us learn more, please click the{" "}
        <b>&quot;Continue&quot;</b> button below. If you are uncomfortable
        answering these questions, click the <b>&quot;Skip Section&quot;</b>{" "}
        button.
      </p>
      <Button className="continue-button" onClick={onContinueAbuseQuestions}>
        Continue
      </Button>
      <Button className="skip-section-button" onClick={onSkipAbuseQuestions}>
        Skip Section
      </Button>
    </div>
  );
}
