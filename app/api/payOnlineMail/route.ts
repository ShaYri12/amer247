import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update SendGrid API key here
    api_key: process.env.NEXT_PUBLIC_SENDGRID_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, mobile, reference, amount, comments, orderNo } =
      await req.json();

    const data = {
      from: "noreply@amer247.com",
      to: email,
      subject: `Amer Pay Online Form  for ${reference} - ${amount}`,
      html: `
      Our support will contact you:
  <b> Name:</b> ${name}<br /> <br /> 
  <b> Email: </b>  ${email} <br /> <br />
  <b> Mobile No: </b>  ${mobile} <br /> <br />
  <b> Reference No:</b>  ${reference} <br /> <br />
  <b> Order NO:</b> ${orderNo}<br /> <br /> 
  <b> Amount:</b>  ${amount} <br /> <br />
  <b> Comments:</b>  ${comments} <br /> <br />
        `,
    };
    const data2 = {
      from: "noreply@amer247.com",
      to: [
        "amertouristvisas@gmail.com",
        "mettinformation@gmail.com",
        "hansraj.akki@gmail.com",
        "nisar@amer247.com",
        "accounts@mettholidays.ae",
      ],
      subject: `Payment Received - Amer ${reference} - ${amount}`,
      replyto: email,

      html: `
      Contacted us:<br />
  <b> Name:</b> ${name}<br /> <br /> 
  <b> Email: </b>  ${email} <br /> <br />
  <b> Mobile No: </b>  ${mobile} <br /> <br />
  <b> Reference No:</b>  ${reference} <br /> <br />
  <b> Order NO:</b> ${orderNo}<br /> <br /> 
  <b> Amount:</b>  ${amount} <br /> <br />
  <b> Comments:</b>  ${comments} <br /> <br />
        `,
    };
    await mailer.sendMail(data);
    await mailer.sendMail(data2);
    return NextResponse.json({ success: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error1" },
      { status: 500 }
    );
  }
}
