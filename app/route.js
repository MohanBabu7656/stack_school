import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // Get the raw body as a string to verify the signature
    const rawBody = await request.text();
    const signature = request.headers.get('x-signature'); // Replace with your provider's actual header name (e.g., 'stripe-signature')
    
    const secret = process.env.WEBHOOK_SECRET; // Make sure this is set in your .env.local file

    // Compute expected signature (this example uses SHA-256, adjust if your provider uses a different algorithm)
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    // Securely compare the signatures to prevent timing attacks
    if (!signature || signature.length !== expectedSignature.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 401 });
    }

    // Now that it's verified, parse the incoming webhook JSON payload
    const payload = JSON.parse(rawBody);
    
    console.log('Webhook received and verified:', payload);
    // Add your webhook processing logic here (e.g., updating a database)

    return NextResponse.json({ success: true, message: 'Webhook processed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Webhook error', error: error.message }, { status: 400 });
  }
}