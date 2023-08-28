const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "saileshmankunwar2021@gmail.com",
    pass: "wrruensdsebzdwsm",
  },
});
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("app is running");
  }
});

const sendMail = async (payload) => {
  const { from, to, message, subject } = payload;
  const info = await transporter.sendMail({
    from: from.toString(),
    to: to.toString(),
    subject: subject,
    text: "Hello world?",
    html: JSON.stringify(message),
  });

  return info.messageId;
};

module.exports = { sendMail };
