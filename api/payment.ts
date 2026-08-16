import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || '';
const NOWPAYMENTS_API_URL = 'https://api.nowpayments.io/v1';

// Your USDT wallet address (TRC-20 recommended for low fees)
// Set this in your Vercel environment variables as NOWPAYMENTS_IPN_CALLBACK_URL
const SUCCESS_URL = process.env.PAYMENT_SUCCESS_URL || 'https://afraino.com/payment/success';
const CANCEL_URL = process.env.PAYMENT_CANCEL_URL || 'https://afraino.com/payment';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Allow CORS for local dev
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, serviceName, clientName, clientEmail, orderId } = request.body;

  if (!amount || !serviceName || !clientEmail) {
    return response.status(400).json({ error: 'Missing required fields: amount, serviceName, clientEmail' });
  }

  if (!NOWPAYMENTS_API_KEY) {
    console.error('Missing NOWPAYMENTS_API_KEY environment variable');
    return response.status(500).json({
      error: 'Payment service not configured. Please contact us via WhatsApp: +252619849199'
    });
  }

  try {
    // Create a payment invoice via NOWPayments API
    const paymentPayload = {
      price_amount: Number(amount),
      price_currency: 'usd',
      pay_currency: 'usdttrc20', // USDT on TRON (low fees)
      order_id: orderId || `AFRAINO-${Date.now()}`,
      order_description: `${serviceName} - Client: ${clientName || clientEmail}`,
      ipn_callback_url: process.env.NOWPAYMENTS_IPN_CALLBACK_URL || '',
      success_url: SUCCESS_URL,
      cancel_url: CANCEL_URL,
    };

    const res = await fetch(`${NOWPAYMENTS_API_URL}/invoice`, {
      method: 'POST',
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentPayload),
    });

    if (!res.ok) {
      const errData = await res.json();
      console.error('NOWPayments Error:', errData);
      throw new Error(`NOWPayments API error: ${res.status} - ${JSON.stringify(errData)}`);
    }

    const data = await res.json();

    return response.status(200).json({
      success: true,
      paymentUrl: data.invoice_url,
      invoiceId: data.id,
      orderId: paymentPayload.order_id,
    });

  } catch (error: any) {
    console.error('Payment API Error:', error);
    return response.status(500).json({
      error: `Payment Error: ${error.message || 'Unknown error'}`,
    });
  }
}
