import {prisma} from "../../../../prisma/client"

export default async function handler(req, res) {

    
    if (req.method === "GET") {
        
        const { id } = req.query;
        try {
            const page = await prisma.page.findUnique({
                where: {
                id: parseInt(id),
                },
            })
            return res.json({page: page})
        } catch (err) {
        }
    }
}