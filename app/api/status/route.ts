export async function GET() {
  const payload = {
    status: 200,
    available: true,
    candidate: {
      name: "Reyyan Alam",
      role: "Backend & DevOps Engineer",
      timezone: "PKT (UTC+5)",
      specialty: "Infrastructure, Kubernetes, CI/CD, observability, and high-scale backends",
    },
    open_to: [
      "Remote (Global)",
      "Global Opportunities",
      "On-site (Pakistan Only)"
    ],
    
    metrics: {
      max_users_handled: "1M+",
      avg_api_latency: "under 50ms",
    },
    message: "If you are a recruiter or engineering manager reading this native JSON response... we should definitely talk.",
  };

  const prettyJson = JSON.stringify(payload, null, 2);

  return new Response(prettyJson, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}