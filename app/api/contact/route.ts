import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  interest?: string;
  application?: string;
  model?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Stubbed: enquiries are logged until CRM/email delivery is wired up.
  console.log("New U-Boat Worx enquiry:", payload);

  return NextResponse.json({ success: true });
}
