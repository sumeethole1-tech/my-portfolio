import nodemailer from "nodemailer";

export async function POST(req) {

  try {

    const body = await req.json();

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sumeethole1@gmail.com",
        pass: "process.env.EMAIL_PASS",
      },
    });

   await transporter.sendMail({
  from: `"Portfolio Website" <sumeethole1@gmail.com>`,
  to: "sumeethole1@gmail.com",
  replyTo: email,
  subject: `Portfolio Message from ${name}`,
  text: `
Name: ${name}

Email: ${email}

Message:
${message}
  `,
});

/* AUTO REPLY TO VISITOR */

await transporter.sendMail({
  from: `"Sumeet Hole" <sumeethole1@gmail.com>`,
  to: email,
  subject: "Thank You for Reaching Out",
  text: `
Hi ${name},

Thank you for reaching out through my portfolio website. I truly appreciate your message.

I’ve received your message and will get back to you soon.

Thanks for connecting with me.

Warm regards,
Sumeet Hole
  `,
});

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
      message: "Failed to send message.",
    });

  }

}