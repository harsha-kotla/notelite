import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {nid} = req.body

        try {
            console.log(parseInt(nid))
            const pages = await prisma.page.findMany({
                where: {
                    nbId: parseInt(nid),
                },
            })

            return res.json({pages: pages})
        } catch (err) {
            return res.status(403).json({err: err})
        }
    }
}