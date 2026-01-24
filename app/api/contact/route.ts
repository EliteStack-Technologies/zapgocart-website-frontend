
  // Next.js app directory route handler for POST /api/contact
  export async function POST(request: Request) {
    try {
      const body = await request.json();
      const { lastName = '', firstName = '', businessName = '', email, phone = '', message } = body;
      if (!email || !message) {
        return new Response(JSON.stringify({ message: 'Email and message are required.' }), { status: 400 });
      }
      // Dynamically import nodemailer for Next.js app directory compatibility
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || email,
        to: process.env.SMTP_TO || process.env.SMTP_USER,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nBusiness: ${businessName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>\n             <p><strong>Business:</strong> ${businessName}</p>\n             <p><strong>Email:</strong> ${email}</p>\n             <p><strong>Phone:</strong> ${phone}</p>\n             <p><strong>Message:</strong><br/>${message}</p>`
      });
      return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
      console.error('Error sending contact form email:', error);
      return new Response(JSON.stringify({ message: 'Failed to send message.' }), { status: 500 });
    }
  }
