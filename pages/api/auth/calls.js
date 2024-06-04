import { MongoClient } from "mongodb";

export default async function handler(req, res){
    const {method, body, uqery} = req;
    //recordemos que esto es igual a hacer esto
    //const method= req.method;
    //const body= req.body;
    //const query= req.query
    const client= new MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("calls");
    const callsCollection= db.collection("calls");

    switch (method){
        case "POST":
            try{
                const {nombre, numero, titulo}=body;
                if (!nombre || !numero ||!titulo){
                    return res
                    .status(400)
                    .json({message: "Faltan campos obligatorios"});
                }
                const newCall= await callsCollection.insertOne({
                    nombre,
                    numero,
                    titulo,
                });
                return res.status(201).json(newCall);
            }catch (error){
                return res
                    .status(500)
                    .json({message: "Error al crear una llamada",error});  
            }
            break;
        case "GET":
            try{
                const calls = await callsCollection.find().toArray();
                return res.status(200).json(calls);
            } catch (error){
                return res.status(500).json({message:"Error al obtener las llamadas", error}); }
            }
        }

