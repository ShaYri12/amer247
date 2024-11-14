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
    const { fullName, email, phoneNumber, reasonForContact, subject, message } =
      await req.json();

    const data = {
      from: "noreply@amer247.com",
      to: email,
      subject: `Amer Contact Form  for ${reasonForContact} - ${subject}`,
      html: `
      Our support will contact you:
  <b> Name:</b> ${fullName}<br /> <br /> 
  <b> Email: </b>  ${email} <br /> <br />
  <b> Mobile No: </b>  ${phoneNumber} <br /> <br />
  <b> Reason:</b>  ${reasonForContact} <br /> <br />
 
  <b> Subject:</b>  ${subject} <br /> <br />
  <b> Message:</b>  ${message} <br /> <br />
        `,
    };
    const data2 = {
      from: "noreply@amer247.com",
      to: "info@amer247.com",
      subject: `Amer Contact Form  for ${reasonForContact} - ${subject}`,
      replyto: email,

      html: `
      Contacted us:<br />
  <b> Name:</b> ${fullName}<br /> <br /> 
  <b> Email: </b>  ${email} <br /> <br />
  <b> Mobile No: </b>  ${phoneNumber} <br /> <br />
  <b> Reason:</b>  ${reasonForContact} <br /> <br />
 
  <b> Subject:</b>  ${subject} <br /> <br />
  <b> Message:</b>  ${message} <br /> <br />
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
