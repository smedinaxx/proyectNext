import { MongoClient } from "mongodb";

export default async function handler(req, res){
    const {method, body, query} = req;
    //recordemos que esto es igual a hacer esto
    //const method= req.method;
    //const body= req.body;
    //const query= req.query
    const client= await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("products");
    const productssCollection= db.collection("products");

    switch (method){
        case "POST":
            try{
                const {nombre, numero, titulo}=body;
                if (!nombre || !numero ||!titulo){
                    return res
                    .status(400)
                    .json({message: "Faltan campos obligatorios"});
                }
                const newProducts= await productsCollection.insertOne({
                    nombre,
                    numero,
                    titulo,
                });
                return res.status(201).json(newProducts);
            }catch (error){
                return res
                    .status(500)
                    .json({message: "Error al crear una llamada",error});  
            }
            break;
        case "GET":
            try{
                const products = await productsCollection.find().toArray();
                return res.status(200).json(products);
            } catch (error){
                return res.status(500).json({message:"Error al obtener las llamadas", error}); }
            }
        }

