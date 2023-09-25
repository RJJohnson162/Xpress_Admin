import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

//Function handles the creation of new products
export default async function handle(res, req) {
    const { method } = req;
    await mongooseConnect();

    try {
        if (method === "POST") {
            const { title, description, price } = req.body;
            const productDoc = await Product.create({
                title,
                description,
                price,
            });
            res.json(productDoc);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error creating product:", error);

        // Send an appropriate error response to the client
        res.status(500).json({ error: "Internal Server Error" });
    }
}
