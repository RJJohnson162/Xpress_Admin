import { Product } from "@/models/products";
import { mongooseConnect } from "@/lib/mongoose";

//Function handles the creation of new products
export default async function Handle(res, req) {
    const { method } = req;
    await mongooseConnect();
    if (method === "POST") {
        const { title, description, price } = req.body;
        const productDoc = await Product.create({
            title,
            description,
            price,
        });
        res.json(productDoc);
    }
}
