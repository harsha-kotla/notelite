import {prisma} from "../../../prisma/client"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("wiwiwiwi")

        const { nid, title } = req.body;
        if (title.length > 300) {
            return res.status(403).json({message: "Write a shorter title"});
        }
        try {
            const d = await prisma.notebook.update({
                where: {
                    id: parseInt(nid),
                  },
                  data: {
                    name: title,
                  },
            })
            return res.json({data: d})
        } catch (err) {
            console.log(err)
        }
    }
    if (req.method === "GET") {
        return res.json({message: "Got youu"})
    }
}