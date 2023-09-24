import Layout from "@/components/layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function NewProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    /**
     * This function is used to create a new product by sending a POST request to the "/api/products" endpoint with the product data.
     * It also updates the state variable "goToProducts" to true, which triggers a redirect to the products page.
     *
     * @param {Event} ev - The event object triggered by the form submission.
     * @returns {Promise<void>} - A promise that resolves when the product is created.
     */
    async function createProduct(ev) {
        ev.preventDefault();

        const data = {
            title,
            description,
            price,
        };

        try {
            await axios.post("/api/products", data);
            setGoToProducts(true);
        } catch (error) {
            console.error("Failed to create product:", error);
        }
    }
    //If form onSubmit, route back to products page
    if (goToProducts) {
        router.push("./products");
    }

    return (
        //Feed the Layout UI model Product creation form
        <Layout>
            <form onSubmit={createProduct}>
                <h1 className="pt-6 mb-6">
                    <b>Add New Product</b>
                </h1>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                ></textarea>
                <label>Price (in USD)</label>
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                <button type="submit" className="btn-primary">
                    Save
                </button>
            </form>
        </Layout>
    );
}
