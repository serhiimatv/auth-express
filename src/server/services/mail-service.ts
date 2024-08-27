import nodemailer, { type Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class MailService {
  transporter: Transporter<SMTPTransport.SentMessageInfo>;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST,
      port: import.meta.env.VITE_SMTP_PORT,
      secure: true,
      auth: {
        user: import.meta.env.VITE_SMTP_USER,
        pass: import.meta.env.VITE_SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: import.meta.env.VITE_SMTP_USER,
      to: to,
      subject: "Activation account",
      text: "",
      html: `<div><h1>For activation go to: </h1><a href="${link}">${link}</a></div>`,
    });
  }
}

export default new MailService();
