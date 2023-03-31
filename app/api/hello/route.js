import { scheduleJob } from "node-schedule"
const nodemailer = require("nodemailer");

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
      user: 'ravi.ranjan@ucodesoft.com', // generated ethereal user
      pass: '@UcodeRavi$123%', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  scheduleJob('job', '*/2 * * * * *',()=>{
    console.log('job running')
    
  })
  return new Response('Hello, Next.js!')
}
