import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
const db = context.locals.runtime?.env?.D1_DB || context.platform?.env?.D1_DB;

  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 400 });
  }

  try {
    const { userId, serviceId, startTime, endTime } = await request.json();

    if (!userId || !serviceId || !startTime || !endTime) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const { success } = await db.prepare(
      "INSERT INTO appointments (user_id, service_id, start_time, end_time) VALUES (?, ?, ?, ?)"
    )
    .bind(userId, serviceId, startTime, endTime)
    .run();

    if (success) {
      return new Response(JSON.stringify({ message: "Appointment booked successfully" }), { status: 201 });
    } else {
      return new Response(JSON.stringify({ error: "Failed to book appointment" }), { status: 500 });
    }

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "An error occurred" }), { status: 500 });
  }
};
