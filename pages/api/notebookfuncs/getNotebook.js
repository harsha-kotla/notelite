import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {nid} = req.body

        try {
           
            const notebook = await prisma.notebook.findUnique({
                where: {
                id: parseInt(nid),
                },
            })
            return res.json({notebook: notebook})
        } catch (err) {
        }
    }
}