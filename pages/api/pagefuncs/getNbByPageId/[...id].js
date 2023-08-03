import {prisma} from "../../../../prisma/client"

export default async function handler(req, res) {

    if (req.method === "GET") {
        const {id} = req.query

        try {
           
            const nb = await prisma.notebook.findUnique({
                where: {
                id: parseInt(id),
                },
            })
            return res.json({notebook: nb})
        } catch (err) {
        }
    }
}