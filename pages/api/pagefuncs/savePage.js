import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
        const {title, content, pid} = req.body;
        const updateUser = await prisma.page.update({
            where: {
              id: parseInt(pid),
            },
            data: {
              title: title,
              content: content
            },
        })
        return res.json({data: updateUser})
        } catch(err) {
            return res.status(403).json({err: err})
        }
    }
}