const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { itemName } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });

  try {
    await transporter.sendMail({
      from: '"Item Enquiry" <your-email@gmail.com>',
      to: 'destination@example.com',
      subject: 'New Item Enquiry',
      text: `Someone enquired about: ${itemName}`
    });

    res.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
