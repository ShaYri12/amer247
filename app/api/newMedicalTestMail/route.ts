import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import { Attachment } from "nodemailer/lib/mailer";

const transporter = {
  auth: {
    // Update SendGrid API key here
    api_key: process.env.NEXT_PUBLIC_SENDGRID_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));
async function streamToBuffer(readableStream: ReadableStream<Uint8Array>) {
  const chunks = [];
  const reader = readableStream.getReader();

  let read;
  while (!(read = await reader.read()).done) {
    chunks.push(read.value);
  }

  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const receivedData = await req.formData();
    const fields: { [key: string]: any } = {}; // To store non-file values
    const attachments: Attachment[] = []; // To store file information for attachments

    for (const entry of receivedData.entries()) {
      const [key, value] = entry;
      if (value instanceof Blob) {
        // Handle files (attachments)
        const buffer = await streamToBuffer(value.stream());

        attachments.push({
          filename: value.name,
          content: buffer, // Ensure that your email sending context supports streams.
          contentType: value.type,
        });
      } else {
        // Handle other fields
        fields[key] = value;
      }
    }

    const data = {
      from: "noreply@amer247.com",
      to: fields.sponsorEmail,
      subject: `Application for ${fields.serviceName} - ${fields.referenceID}`,
      attachments: attachments,
      html: `
  <b> Service:</b> ${fields.serviceName}<br /> <br /> 
  <b> Reference ID:</b> ${fields.referenceID}<br /> <br /> 
  <b> Name: </b>  ${fields.applicantName} <br /> <br />
  <b> Sponsor Name: </b>  ${fields.sponsorName} <br /> <br />
  <b> Sponsor Email: </b>  ${fields.sponsorEmail} <br /> <br />
  <b> Sponsor Mobile No: </b>  ${fields.sponsorMobileNo} <br /> <br />
  <b> WhatApp No: </b>  ${fields.whatAppNo} <br /> <br />
  <b> Account IBAN No:</b>  ${fields.account_IBAN_No} <br /> <br />
  <b> Application Priority: </b>  ${fields.applicationPriority} <br /> <br />
  <b> Application Type: </b>  ${fields.applicationType} <br /> <br />
  <b> Address: </b>  ${fields.address} <br /> <br />
  <b> Comment: </b>  ${fields.comment} <br /> <br />
  *If you have any questions or inquiries, you might find it in FAQs or kindly reach us on our WhatsApp +971 58 1257700

       `,
    };
    const data2 = {
      from: "noreply@amer247.com",
      to: [
        "applyonline@amer247.com",
        "online@amer247.online",
        "amerapplications@gmail.com",
      ],
      replyto: fields.sponsorEmail,
      subject: `Application for ${fields.serviceName} - ${fields.referenceID}`,
      attachments: attachments,
      html: `
  <b> Service:</b> ${fields.serviceName}<br /> <br /> 
  <b> Reference ID:</b> ${fields.referenceID}<br /> <br /> 
  <b> Name: </b>  ${fields.applicantName} <br /> <br />
  <b> Sponsor Name: </b>  ${fields.sponsorName} <br /> <br />
  <b> Sponsor Email: </b>  ${fields.sponsorEmail} <br /> <br />
  <b> Sponsor Mobile No: </b>  ${fields.sponsorMobileNo} <br /> <br />
  <b> WhatApp No: </b>  ${fields.whatAppNo} <br /> <br />
  <b> Account IBAN No:</b>  ${fields.account_IBAN_No} <br /> <br />
  <b> Application Priority: </b>  ${fields.applicationPriority} <br /> <br />
    <b> Application Type: </b>  ${fields.applicationType} <br /> <br />
 <b> Address: </b>  ${fields.address} <br /> <br />
  <b> Comment: </b>  ${fields.comment} <br /> <br />
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
