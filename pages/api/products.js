import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    const { method, body, query } = req;
    //recordemos que esto es igual a hacer esto
    //const method= req.method;
    //const body= req.body;
    //const query= req.query
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("mongoose");
    const productsCollection = db.collection("products");

    switch (method) {
        case "POST":
            try {
                const { name, description, price } = req.body;
                if (!name || !description || !price) {
                    return res
                        .status(400)
                        .json({ message: "Faltan campos obligatorios" });
                }
                const newProducts = await productsCollection.insertOne({
                    name,
                    description,
                    price,
                });
                return res.status(201).json(newProducts);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error al crear productos", error });
            }
            break;
        case "GET":
            try {
                // Obtener el parámetro de consulta 'brand'
                const { brand } = query;
                // Crear una expresión regular para buscar productos que contienen 'brand'
                const filter = brand ? { name: { $regex: brand, $options: 'i' } } : {};
                const products = await productsCollection.find().toArray();
                return res.status(200).json(products);
            } catch (error) {
                return res.status(500).json({ message: "Error al obtener productos", error });
            }
            break;
            default:
                res.setHeader("Allow", ["GET", "POST"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
    }
}

