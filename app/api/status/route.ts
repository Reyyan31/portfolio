import { NextResponse } from 'next/server';

// Explicitly forces Next.js to pre-render this endpoint as a static JSON file
// because standard dynamic Route Handlers are blocked during `output: "export"`.
export const dynamic = "force-static";

export async function GET() {
  const payload = {
    status: 200,
    available: true,
    candidate: {
      name: "Reyyan Alam",
      role: "Backend Engineer",
      timezone: "PKT (UTC+5)",
      specialty: "High-Availability Systems & Fast API Development",
    },
    open_to: [
      "Remote (Global)", 
      "EU/US/UK Relocation Ready", 
      "On-site (Pakistan Only)"
    ],
    core_stack: ["Node.js", "PHP/Laravel", "SQL Server", "Redis", "Docker"],
    metrics: {
      max_users_handled: "1M+",
      avg_api_latency: "<50ms",
    },
    message: "If you are a recruiter or engineering manager reading this native JSON response... we should definitely talk.",
  };

  // Next.js internal JSON parser sometimes escapes '<' as \u003C to prevent XSS. 
  // We explicitly unescape it so it reads perfectly clean for recruiters.
  const rawJson = JSON.stringify(payload, null, 2).replace(/\\u003C/g, '<');

  return new Response(rawJson, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
