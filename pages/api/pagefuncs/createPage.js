import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const {nid} = req.body
        try {
            const d = await prisma.page.create({
                data: {
                    title: "",
                    content: "",
                    nbId: parseInt(nid),
                    authorId: 1
                }
            })
            return res.json({data: d})
        } catch(err) {
            console.log(err)
            return res.status(403).json({err: "error"})
        }
    } if (req.method === "GET") {
        return res.json({data: "Hi"})
    }
}