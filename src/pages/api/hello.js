// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "@/server/database";

export default function handler(req, res) {
  client.connect();
  client.query(`SELECT * FROM financial`, (error, result) => {
    if (!error) {
      res.status(200).json(result?.rows);
      console.log(result.rows);
    } else {
      console.log(error.message);
    }
    client.end();
  });
}
