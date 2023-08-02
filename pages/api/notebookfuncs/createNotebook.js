import prisma from "../../../prisma/client"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {title, description, uemail } = req.body;
        if (title.length > 300) {
            return res.status(403).json({message: "Write a shorter title"});
        }
        try {
            const d = await prisma.notebook.create({
                data: {
                    uemail,
                    name: title,
                    description,
                    public: true,
                    authorId: 1
                }
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