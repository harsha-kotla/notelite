import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {nid} = req.body

        try {
           
            const nb = await prisma.notebook.findUnique({
                where: {
                id: parseInt(nid),
                },
            })
            return res.json({notebook: nb})
        } catch (err) {
        }
    }
}