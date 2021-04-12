import { VercelRequest, VercelResponse } from "@vercel/node";
import connect from "../../../src/utils/database";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { userId } = req.body;
  const { db } = await connect();

  const user = await db.collection('users').findOne({userId: userId});

  return res.status(200).json(user);
};