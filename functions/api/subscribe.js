// Cloudflare Pages Function — POST /api/subscribe
// Stores newsletter signups in the bound D1 database (binding: DB).
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== "POST") return json({ ok: false, error: "Method not allowed." }, 405);
  try {
    if (!env.DB) return json({ ok: false, error: "Newsletter is not configured yet." }, 500);

    let email = "";
    const ct = request.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      const body = await request.json().catch(() => ({}));
      email = String(body.email || "");
    } else {
      const form = await request.formData().catch(() => null);
      email = form ? String(form.get("email") || "") : "";
    }
    email = email.trim().toLowerCase();

    if (!EMAIL_RE.test(email) || email.length > 254) {
      return json({ ok: false, error: "Please enter a valid email address." }, 400);
    }

    const source = new URL(request.url).hostname;
    await env.DB.prepare(
      "INSERT INTO subscribers (email, source) VALUES (?1, ?2) ON CONFLICT(email) DO NOTHING"
    )
      .bind(email, source)
      .run();

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "Something went wrong. Please try again." }, 500);
  }
}
