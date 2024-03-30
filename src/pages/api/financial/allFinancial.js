import client from "@/server/database";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    client.connect();
    client.query(`SELECT * FROM financial`, (error, result) => {
      if (!error) {
        res.status(200).json({
          success: true,
          message: "Data retrieve Success",
          data: result?.rows,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Data retrieve Success",
          data: error?.message,
        });
      }
      // client.end();
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
