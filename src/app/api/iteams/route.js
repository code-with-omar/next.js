import { NextResponse } from 'next/server';
export async function GET() {
  const data = {
    message: "Successfully get data",
    error: false,
    status: 200,
  };
  return Response.json({ data });
}
// export async function POST(req) {
//   const data = await req.json();
//   return Response.json({ data });
// }

// this is recommandation in next.js 15
export async function POST(req) {
  const data = await req.json();
  return NextResponse.json({ data });
}