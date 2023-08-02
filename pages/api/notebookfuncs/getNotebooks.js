import prisma from "../../../prisma/client"

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const data = await prisma.notebook.findMany();
            return res.json({data: data})
        } catch(err) {
            res.status(403).json({err: err})
        }
    }
}