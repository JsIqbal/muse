// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// import { NextResponse } from "next/server";

// export const POST = async (req) => {
//     const { items, userEmail, userId } = await req.json();

//     if (!items || !userEmail)
//         return NextResponse.json(
//             { message: "field items and userEmail not provided" },
//             { success: false }
//         );

//     let session;

//     try {
//         const line_items = items.map((item) => {
//             return {
//                 price_data: {
//                     currency: "usd",
//                     product_data: {
//                         name: item.name,
//                         images: [item.image],
//                         metadata: { productId: item.id },
//                     },
//                     unit_amount: item.price.dollar * 100,
//                 },
//                 quantity: 1,
//                 tax_rates: [`${process.env.NEXT_PUBLIC_PROD_TAX_ID}`],
//             };
//         });

//         session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             metadata: {
//                 userId,
//                 line_items: JSON.stringify(line_items), // Convert line_items to JSON string
//             },
//             success_url: `${process.env.CLIENT_URL}/my-products`,
//             cancel_url: `${process.env.CLIENT_URL}/cart`,
//             customer_email: userEmail,
//             mode: "payment",
//             line_items: line_items,
//         });
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json({ message: err.message }, { success: false });
//     }

//     return NextResponse.json({ session_url: session.url }, { success: true });
// };

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

// Define the PurchaseRequest struct
class PurchaseRequest {
    constructor(userId, productIds) {
        this.user_id = userId;
        this.product_ids = productIds;
    }
}

export const POST = async (req) => {
    const { items, userEmail, userId } = await req.json();

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
                tax_rates: [`${process.env.NEXT_PUBLIC_PROD_TAX_ID}`],
            };
        });

        // Create a PurchaseRequest instance
        const purchaseRequest = new PurchaseRequest(
            userId,
            line_items.map(
                (item) => item.price_data.product_data.metadata.productId
            )
        );

        session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            metadata: {
                line_items: JSON.stringify(purchaseRequest), // Convert PurchaseRequest to JSON string
            },
            success_url: `${process.env.CLIENT_URL}/my-products`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
            customer_email: userEmail,
            mode: "payment",
            line_items: line_items,
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: err.message }, { success: false });
    }

    return NextResponse.json({ session_url: session.url }, { success: true });
};
