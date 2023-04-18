const express = require("express");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const app = express();

// Set up a route for email verification
app.get("/verify-email", async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, "your-secret-key-here");
    const { email } = decoded;

    res.send("Email verified");
  } catch (error) {
    console.error(error);
    res.status(400).send("Invalid token");
  }
});

// Set up a route for sending a verification email
app.post("/send-verification-email", async (req, res) => {
  const { email } = req.body;

  // Generate a verification token
  const token = jwt.sign({ email }, "your-secret-key-here", {
    expiresIn: "1h",
  });

  // Send the verification email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: email,
    subject: "Verify your email address",
    html: `Please click the following link to verify your email address: <a href="https://your-app.com/verify-email?token=${token}">Verify Email</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent");
    res.send("Verification email sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending verification email");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});