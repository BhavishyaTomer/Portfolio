const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
    
  try {
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.GRIDAPI
      }
    });
    const { firstName, lastName, email, phone, message } = req.body;
    
    const mailOptions = {
      from: 'aryannnn51@gmail.com',
      to: 'bhavishyatomer@gmail.com',
      subject: 'Hello From Someone',
      text: `requested`,
      html: `<b>Hello world? ${firstName} ${lastName} ${email} ${phone} ${message}</b>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ code: 200, message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error in sendEmail:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = sendEmail;
