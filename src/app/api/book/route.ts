import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log("Email:", process.env.EMAIL_USER);
    console.log("Password:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your Gmail address
      replyTo: email, // User's email (retrieved from form)
      to: "TheParkwaysBand@gmail.com",
      subject: `Booking Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
