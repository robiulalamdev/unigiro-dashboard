import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const result = await prisma.financial.findMany({
      orderBy: [
        {
          id: "desc",
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Data retrieve Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
