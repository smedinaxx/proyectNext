import transporter from "../../libs/nodemailer"

export default async function handler(req, res){
    if (req.method === "POST"){
        const {name, email, message} = req.body;

        if(!name || !email || !message){
        return res.status(400).json({error:"please fill all fields"});
        }

    const mailDate= {
        from: process.env.SMTP_USER,
        to: email,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
    };

    try{

        const info= await transporter.sendMail (mailDate);
        return res.status(200).json({message: "Email sent", info});

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Error sending email", 
            error});}
        }
    
        return res.status(405).json({error: "Method not allowed"});
    }