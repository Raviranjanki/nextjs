import { cancelJob, scheduleJob } from "node-schedule"
import nodemailer from 'nodemailer'

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request) {

  // create reusable transporter object using the default SMTP transport
  console.log('qwdknjwqd');
  
  
  scheduleJob('job', '*/2 * * * * *', async()=>{
    console.log('job running')
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'ravi.ranjan@ucodesoft.com', // generated ethereal user
        pass: '@UcodeRavi$123%', // generated ethereal password
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error)
          reject(error)
        } else {
          console.log('Server is ready to take our messages')
          resolve(success)
        }
      })
    })

    let info = transporter.sendMail({
      from: 'mr.ranjan.officials@gmail.com', // sender address
      to: "mr.ranjan.officials@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    cancelJob('job')
  })
  return new Response('Hello, Next.js!')
}
