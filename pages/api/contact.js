/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: process.env.PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: process.env.USER,
    subject: `Mensagem de ${req.body.name}`,
    text: `${req.body.message} | Enviado de ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Enviado de: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  })

  res.status(200);
}
