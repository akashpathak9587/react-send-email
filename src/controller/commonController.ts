import { Resend } from "resend";
import { ConnectMeEmail } from "../emails/ConnectMeEmail";
const sendEmail = async (req: any, res: any) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(req.body.purpose);

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aakapa95@gmail.com",
    subject: `Portfolio Reminder | ${req.body.purpose}`,
    react: ConnectMeEmail({
      name: req.body.name,
      email: req.body.email,
      purpose: req.body.purpose,
      message: req.body.message,
    }),
  });

  if (data.error) {
    console.error("Error sending email:", data.error);
    return res.status(500).json({ message: "Error sending email" });
  }
  res.status(200).json({ message: "Email sent successfully" });
};

export { sendEmail };
