import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();
  const client = await clientPromise;
  const db = client.db(); // default DB name

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return new Response(JSON.stringify({ message: "User created" }), { status: 201 });
}
