const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Temporary SMTP connection test
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP verification failed:", error.message);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

const sendEnquiryEmail = async (enquiry) => {
  const { name, email, phone, product, message } = enquiry;

  await transporter.sendMail({
    from: `"Datchick Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,

    subject: `New Customer Enquiry - ${
      product || "General Requirement"
    }`,

    text: `
New customer enquiry received from Datchick Electronics website.

Customer Details
----------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Product/Service: ${product || "Not specified"}

Requirement
-----------
${message}

Please contact the customer regarding this enquiry.
`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; color: #1e293b;">

        <div style="background: #061426; padding: 25px; color: white;">
          <h2 style="margin: 0;">New Customer Enquiry</h2>
          <p style="margin: 8px 0 0; color: #67e8f9;">
            Datchick Electronics Website
          </p>
        </div>

        <div style="padding: 30px; border: 1px solid #e2e8f0;">

          <h3 style="margin-top: 0;">Customer Details</h3>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Name</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Email</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone</td>
              <td style="padding: 10px 0;">${phone || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: bold;">
                Product / Service
              </td>
              <td style="padding: 10px 0;">
                ${product || "Not specified"}
              </td>
            </tr>
          </table>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;" />

          <h3>Customer Requirement</h3>

          <div style="
            background: #f8fafc;
            padding: 20px;
            border-left: 4px solid #06b6d4;
            line-height: 1.7;
          ">
            ${message.replace(/\n/g, "<br />")}
          </div>

          <div style="
            margin-top: 30px;
            padding: 15px;
            background: #ecfeff;
            color: #155e75;
          ">
            <strong>Reply directly to this email</strong>
            <br />
            The customer's email has been set as the Reply-To address.
          </div>

        </div>

      </div>
    `,
  });
};

module.exports = {
  sendEnquiryEmail,
};