import nodemailer from "nodemailer";

const userPassword = process.env.EMAIL_PASSWORD as string;
const userEmail = process.env.EMAIL_USER as string;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

export default transporter;
