import dbConnect from "@/lib/dbConnect";
// get all data from the mongoDB database
export async function GET() {
  const data = await dbConnect("posts").find({}).toArray();
  return Response.json(data);
}
// post one data in mongoDB databse

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("posts").insertOne(postedData);
  return Response.json(result);
}
