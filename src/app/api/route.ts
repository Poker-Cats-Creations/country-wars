import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
   // return new Response('Hello, Next.js!', {
   //    status: 200,
   //    statusText: 'test',
   // })

   return NextResponse.json({ status: 'success' }, { status: 200 })
}
