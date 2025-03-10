import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
// get all data from the mongoDB database
export async function GET() {
  const data = await dbConnect("posts").find({}).toArray();
  revalidatePath("posts");
  return Response.json(data);
}
// post one data in mongoDB databse

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("posts").insertOne(postedData);
  return Response.json(result);
}
