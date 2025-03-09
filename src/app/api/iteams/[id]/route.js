// GET
export async function GET(req, params) {
  const p = await params;
  return Response.json({ params: p });
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
