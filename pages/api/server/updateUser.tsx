import { VercelRequest, VercelResponse } from "@vercel/node";
import connect from "../../../src/utils/database";

export default async (
  req: VercelRequest,
  res: VercelResponse
) => {
  const { 
    userId, 
    completedChallenges,
    level,
    currentExperience,
    totalExperience } = req.body;
    const { db } = await connect();

    const response = await db.collection('users').findOneAndUpdate(
      {_id: userId},
      {
        $set: { completedChallenges, level, currentExperience, totalExperience },
      }
    );

    return res.status(200).json(response);
};