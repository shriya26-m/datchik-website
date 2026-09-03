const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

const enquiryRoutes = require("./routes/enquiryRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/enquiries", enquiryRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Datchick Electronics API is running",
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });