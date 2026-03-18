/*
 * STRIPE PAYMENT SETUP GUIDE
 *
 * This file outlines the backend setup required for the booking form to work with Stripe payments.
 *
 * REQUIREMENTS:
 * 1. Node.js backend (Express recommended)
 * 2. Stripe account (https://stripe.com)
 * 3. Environment variables set up
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Install Stripe:
 *    npm install stripe express
 *
 * 2. Create a .env file with:
 *    STRIPE_SECRET_KEY=your_stripe_secret_key
 *    STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
 *    FRONTEND_URL=http://localhost:3000 (or your frontend URL)
 *
 * 3. Create an Express endpoint /api/create-checkout-session with the following code:
 *
 *    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 *    const express = require('express');
 *    const app = express();
 *
 *    app.use(express.json());
 *
 *    app.post('/api/create-checkout-session', async (req, res) => {
 *      try {
 *        const { name, email, service, date, message, price } = req.body;
 *
 *        const session = await stripe.checkout.sessions.create({
 *          payment_method_types: ['card'],
 *          line_items: [
 *            {
 *              price_data: {
 *                currency: 'gbp',
 *                product_data: {
 *                  name: service === 'one-on-one'
 *                    ? 'One to One Session'
 *                    : 'Tantric Hawan Sacred Fire Ceremony',
 *                  description: `Date: ${date}`,
 *                },
 *                unit_amount: price * 100, // Convert to pence
 *              },
 *              quantity: 1,
 *            },
 *          ],
 *          customer_email: email,
 *          metadata: {
 *            name,
 *            service,
 *            date,
 *            message,
 *          },
 *          success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
 *          cancel_url: `${process.env.FRONTEND_URL}/cancel`,
 *        });
 *
 *        res.json({ sessionUrl: session.url });
 *      } catch (error) {
 *        console.error(error);
 *        res.status(400).json({ error: error.message });
 *      }
 *    });
 *
 *    app.listen(3001, () => {
 *      console.log('Server running on port 3001');
 *    });
 *
 * 4. CORS Configuration:
 *    You'll need to enable CORS for your frontend domain:
 *
 *    const cors = require('cors');
 *    app.use(cors({
 *      origin: process.env.FRONTEND_URL,
 *      credentials: true
 *    }));
 *
 * 5. Testing with Stripe:
 *    Use these test card numbers:
 *    - Success: 4242 4242 4242 4242
 *    - Failure: 4000 0000 0000 0002
 *
 *    Expiry date: Any future date (e.g., 12/25)
 *    CVC: Any 3 digits
 *
 * 6. Frontend Routes Needed:
 *    - /success (PaymentSuccessPage) - Already created
 *    - /cancel (PaymentCancelPage) - Already created
 *
 * 7. Add these routes to your React Router:
 *
 *    import PaymentSuccessPage from './pages/PaymentSuccessPage';
 *    import PaymentCancelPage from './pages/PaymentCancelPage';
 *
 *    <Route path="/success" element={<PaymentSuccessPage />} />
 *    <Route path="/cancel" element={<PaymentCancelPage />} />
 *
 * WEBHOOK SETUP (Optional but Recommended):
 *
 * Set up webhooks to handle payment events:
 *
 * app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
 *   const sig = req.headers['stripe-signature'];
 *
 *   try {
 *     const event = stripe.webhooks.constructEvent(
 *       req.body,
 *       sig,
 *       process.env.STRIPE_WEBHOOK_SECRET
 *     );
 *
 *     if (event.type === 'checkout.session.completed') {
 *       const session = event.data.object;
 *       // Send confirmation email to session.customer_email
 *       // Save booking details to database
 *     }
 *
 *     res.json({received: true});
 *   } catch (err) {
 *     res.status(400).send(`Webhook Error: ${err.message}`);
 *   }
 * });
 */

export const stripeConfig = {
  // Note: Keep your Stripe keys in environment variables
  // NEVER commit keys to version control
  publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  // Secret key should ONLY be on backend
  // secretKey: process.env.STRIPE_SECRET_KEY,
};

export const paymentConfig = {
  currency: "gbp",
  successUrl: "/success",
  cancelUrl: "/cancel",
};
