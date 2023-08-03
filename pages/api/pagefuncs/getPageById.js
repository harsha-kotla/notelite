import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {nid} = req.body

        try {
           
            const page = await prisma.page.findUnique({
                where: {
                id: parseInt(nid),
                },
            })
            return res.json({page: page})
        } catch (err) {
        }
    }
}