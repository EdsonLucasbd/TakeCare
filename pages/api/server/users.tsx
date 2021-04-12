import { VercelRequest, VercelResponse } from "@vercel/node";
import connect from "../../../src/utils/database";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { db } = await connect();

  const users = await db.collection('users').find({}).toArray();

  return res.status(200).json(users);
};