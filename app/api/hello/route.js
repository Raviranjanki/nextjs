import { scheduleJob } from "node-schedule"

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request) {

  scheduleJob('job', '*/2 * * * * *',()=>{
    console.log('job running')
  })
  return new Response('Hello, Next.js!')
}
