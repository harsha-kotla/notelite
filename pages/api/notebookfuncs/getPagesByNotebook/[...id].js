import {prisma} from "../../../../prisma/client"

export default async function handler(req, res) {

    
    if (req.method === "GET") {
        
        const { id } = req.query;
        try {
            const p = await prisma.page.findMany({
                where: {
                nbId: parseInt(id),
                },
            })
            return res.json({pages: p})
        } catch (err) {
        }
    }
}