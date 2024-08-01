import nodemailer from "nodemailer";

const userGmail = process.env.EMAIL_USER;
const passAppGmail = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    const mailOptions = {
      from: userGmail,
      to: to,
      subject: subject,
      text: text,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al enviar el email" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}