import EvaluationEmailTemplate from "../../components/Evaluations/CreateNewEvaluation/EvaluationEmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { emailData } = await req.json();
  const {
    emails,
    userName,
    evaluationTitle,
    categoryIds,
    evaluationId,
    expirationDate,
  } = emailData;

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "ashleys20@vt.edu",
      subject: "Lasso Safe Evaluation",
      react: EvaluationEmailTemplate({
        senderName: userName,
        evaluationTitle: evaluationTitle,
        evaluationId: evaluationId,
        expirationDate: expirationDate,
        categoryIds: categoryIds,
      }),
    });
    console.log("success");
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
