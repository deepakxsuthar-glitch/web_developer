import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass && pass.trim() !== '' && pass !== 'your_gmail_app_password_here') {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  // Graceful simulation transporter when user hasn't configured real credentials
  return null;
};

/**
 * Send notification email to Deepak & auto-reply confirmation to client
 */
export const sendContactEmails = async ({ name, email, phone, selectedPackage, message }) => {
  const transporter = createTransporter();
  const notificationRecipient = process.env.NOTIFICATION_EMAIL || 'rjdeepu00@gmail.com';

  const notificationHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
      <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 0.5px;">🚀 New Client Inquiry Received!</h1>
        <p style="margin: 6px 0 0; color: #e2e8f0; font-size: 14px;">from Deepak's Portfolio & Web Services</p>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Email Address:</td>
            <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #ffffff;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #22c55e; text-decoration: none;">${phone} (Chat on WhatsApp)</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Selected Package:</td>
            <td style="padding: 8px 0; color: #a855f7; font-weight: bold; font-size: 15px;">${selectedPackage}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 16px; background: #1e293b; border-radius: 8px; border-left: 4px solid #3b82f6;">
          <h3 style="margin: 0 0 8px; color: #93c5fd; font-size: 14px; text-transform: uppercase;">Message:</h3>
          <p style="margin: 0; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}?subject=Regarding%20Your%20Inquiry%20for%20${encodeURIComponent(selectedPackage)}" 
             style="display: inline-block; background: linear-gradient(135deg, #2563eb, #7c3aed); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">
            Reply to ${name}
          </a>
        </div>
      </div>
      <div style="background: #090d16; padding: 14px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #1e293b;">
        © 2026 Deepak Web Development Services | System Notification
      </div>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
      <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px;">Hi ${name}, thank you for reaching out! 👋</h1>
        <p style="margin: 6px 0 0; color: #e2e8f0; font-size: 14px;">I have received your request for: <strong>${selectedPackage}</strong></p>
      </div>
      <div style="padding: 24px; line-height: 1.6;">
        <p style="color: #e2e8f0;">I appreciate your interest in working together to build a high-performance website for your brand.</p>
        <p style="color: #cbd5e1;">I am currently reviewing your details and will get back to you within <strong>24 hours</strong> with an initial plan, estimate, and next steps.</p>
        
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 6px; color: #94a3b8; font-size: 13px;">NEED A FASTER RESPONSE?</p>
          <p style="margin: 0; color: #ffffff;">You can message me directly on WhatsApp at <a href="https://wa.me/919256729688" style="color: #22c55e; font-weight: bold; text-decoration: none;">+91 9256729688</a></p>
        </div>

        <p style="color: #94a3b8; font-size: 14px; margin-top: 24px;">
          Best regards,<br>
          <strong style="color: #ffffff; font-size: 16px;">Deepak</strong><br>
          <span style="color: #38bdf8;">Junior Web Developer & UI Designer</span><br>
          <span>Email: <a href="mailto:rjdeepu00@gmail.com" style="color: #38bdf8;">rjdeepu00@gmail.com</a></span>
        </p>
      </div>
      <div style="background: #090d16; padding: 14px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #1e293b;">
        © 2026 Deepak. All rights reserved.
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('📧 [Mail Simulation] SMTP credentials not set or in local demo mode.');
    console.log(`✉️ Mail to Deepak (${notificationRecipient}): New inquiry from ${name} (${email}) for ${selectedPackage}`);
    console.log(`✉️ Auto-reply sent to client: ${email}`);
    return {
      success: true,
      simulated: true,
      message: 'Email logged in demo mode. Configure SMTP_USER and SMTP_PASS for live sending.'
    };
  }

  // Live send
  const infoNotification = await transporter.sendMail({
    from: `"Deepak Website" <${process.env.SMTP_USER}>`,
    to: notificationRecipient,
    subject: `🔔 New Lead: ${name} interested in ${selectedPackage}`,
    html: notificationHtml,
  });

  const infoAutoReply = await transporter.sendMail({
    from: `"Deepak - Web Developer" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Thank you for contacting Deepak! (Regarding: ${selectedPackage})`,
    html: autoReplyHtml,
  });

  return {
    success: true,
    simulated: false,
    notificationId: infoNotification.messageId,
    autoReplyId: infoAutoReply.messageId,
  };
};
