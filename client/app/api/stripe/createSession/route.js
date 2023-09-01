import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { items, userEmail } = await req.json();
    if (!items || !userEmail)
        return NextResponse.json(
            { message: "field items and userEmail not provided" },
            { success: false }
        );

    let session;

    try {
        const line_items = items.map((item) => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        images: [item.image],
                        metadata: { productId: item.id },
                    },
                    unit_amount: item.price.dollar * 100,
                },
                quantity: 1,
                tax_rates: ["txr_1NfhH1HyjaNCI3rEbD2I6VHu"],
            };
        });

        session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            success_url: `${process.env.CLIENT_URL}/my-products`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
            customer_email: userEmail,
            mode: "payment",
            line_items,
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: err.message }, { success: false });
    }

    return NextResponse.json({ session_url: session.url }, { success: true });
};
