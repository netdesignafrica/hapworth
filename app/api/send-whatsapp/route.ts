import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: Integrate with WhatsApp Cloud API, Twilio, or another provider here.
    // This stub just logs the payload on the server and returns success.
    // Be careful not to log sensitive data in production.
    // Example payload: { name, email, phone, service, message }
    // In production you would call the provider API here and return its result.
    // For now return a generic success response.
    // (Server-side console visible where Next.js is running)
    // eslint-disable-next-line no-console
    console.log('[send-whatsapp] payload received:', body)

    return NextResponse.json({ success: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[send-whatsapp] error parsing request:', err)
    return NextResponse.json({ success: false, error: 'invalid request' }, { status: 400 })
  }
}
