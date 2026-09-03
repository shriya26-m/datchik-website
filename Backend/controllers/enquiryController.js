const Enquiry = require("../models/Enquiry");
const { sendEnquiryEmail } = require("../utils/mailer");

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, product, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // 1. Save enquiry in MongoDB
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      product,
      message,
    });

    // 2. Send email notification
    try {
      await sendEnquiryEmail(enquiry);
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);

      return res.status(201).json({
        success: true,
        message:
          "Enquiry saved successfully, but email notification could not be sent.",
        enquiry,
        emailSent: false,
      });
    }

    // 3. Success response
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiry,
      emailSent: true,
    });
  } catch (error) {
    console.error("Enquiry Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting enquiry.",
    });
  }
};

module.exports = {
  createEnquiry,
};