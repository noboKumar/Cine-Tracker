import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("cine_Tracker");
    const collection = db.collection("bookmarks");

    const result = await collection.insertOne(body);

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}