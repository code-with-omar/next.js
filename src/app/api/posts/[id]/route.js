import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
// GET
export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("posts").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}

// DELETE

export async function DELETE(req, { params }) {
  const p = await params;
  const response = await dbConnect("posts").deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(response);
}
// UPDATE
export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const postedData = await req.json(); // Await JSON parsing
    // if (!ObjectId.isValid(id)) {
    //   return Response.json({ error: "Invalid ID" }, { status: 400 });
    // }
    const filter = { _id: new ObjectId(id) };
    const update = { $set: postedData }; // Properly set update object

    const updatedResponse = await dbConnect("posts").updateOne(filter, update, {
      upsert: true,
    });

    return Response.json(updatedResponse);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
