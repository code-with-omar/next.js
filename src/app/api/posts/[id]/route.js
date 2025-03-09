import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
// GET
export async function GET(req, {params}) {
  const p = await params;
  const singleData = await dbConnect("posts").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}
// POST
export async function POST(req, params) {
  const p = await params;
  return Response.json({ params: p });
}
// DELETE

export async function DELETE(req, params) {
  const p = await params;
  return Response.json({ params: p });
}
// UPDATE
export async function PATCH(req, params) {
  const p = await params;
  return Response.json({ params: p });
}
