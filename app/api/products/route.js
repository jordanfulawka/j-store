import Stripe from 'stripe';
import '../../../envConfig.js';

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY);

export async function GET() {
  try {
    return Response;
  } catch (error) {
    console.error('Error fetching data from stripe: ', error.message);
    return Response.json({ error: 'Failed to fetch data from stripe' });
  }
}
