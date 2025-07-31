import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { newTier } = await req.json();
  if (!newTier) {
    return NextResponse.json({ error: "No tier provided" }, { status: 400 });
  }

  try {
    await fetch(`https://api.clerk.com/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_metadata: { tier: newTier },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Tier update error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
