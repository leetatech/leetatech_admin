import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch("https://leetabackend-e6d948d15ae2.herokuapp.com/api/session/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
        user_type: "admin",
      }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Error calling backend:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
