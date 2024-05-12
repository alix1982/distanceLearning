const nodeMailer = require('nodemailer');

require('dotenv').config();

const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_MAIL, SMTP_APP_PASS } = process.env;

const sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
  //   host: SMTP_HOST,
  //   port: SMTP_PORT,
  //   secure: SMTP_SECURE,
  //   auth: {
  //     user: SMTP_MAIL,
  //     pass: SMTP_APP_PASS,
  //   },
  // });

  // const mailOptions = {
  //   from: SMTP_MAIL,
  //   to: options.to,
  //   subject: options.subject,
  //   html: options.html,
  // };

  // SMTP_SECURE=true

  const transporter = nodeMailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    // secure: SMTP_SECURE,
    auth: {
      user: 'testnickulin@yandex.ru',
      pass: 'kgxnmxcesucxqljy',
    },
  });

  const mailOptions = {
    from: 'testnickulin@yandex.ru',
    to: 'alix1982@yandex.ru',
    subject: 'Вопрос',
    html: `
    <h1>Имя: dfgdfgdf</h1>
  `,
  };

  await transporter.sendMail(mailOptions);
  console.log('Email отправлен');
};

module.exports = sendEmail;
