import horizontallogowhite from "../../public/images/logo-horizontal-white.png";
import Image from "next/image";
import Link from "next/link";

type EvaluationEmailTemplateProps = {
  senderName: string;
  evaluationTitle: string;
  expirationDate: Date;
  evaluationURL: string;
};

export default function EvaluationEmailTemplate({
  senderName,
  evaluationTitle,
  expirationDate,
  evaluationURL,
}: EvaluationEmailTemplateProps) {
  const expirationDateString = new Date(expirationDate).toLocaleDateString();

  return (
    <div style={email_container}>
      <p style={email_text}>Hello!</p>
      <p style={email_text}>
        You&apos;ve been invited to take our {evaluationTitle} Evaluation.
      </p>
      <p>
        Your anonymous responses will be sent to your organization to help
        inform future changes. Your responses and participation are also helping
        to create a safer environment for all future athletes.
      </p>
      <p style={email_text}>
        Please complete this evaluation by <b>{expirationDateString}</b>
      </p>
      <p style={email_text}>
        Thank you for your participation and if you have any questions about the
        survey or issues to report, please send to info@lassosafe.com
      </p>
      <p>
        <b>Evaluation URL:</b> {evaluationURL}
      </p>
      <p style={email_text}>Thank you,</p>
      <p style={email_text}>{senderName}</p>
    </div>
  );
}

const begin_evaluation_button = {
  backgroundColor: "navy",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bold",
  padding: "10px",
  fontSize: "15px",
  marginBottom: "10px",
  marginTop: "10px",
};

const email_container = {
  boxShadow: "1px 1px 7px rgba(0, 0, 0, 0.15)",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: "10px",
};

const email_text = {
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "15px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
