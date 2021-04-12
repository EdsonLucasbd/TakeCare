import { VercelRequest, VercelResponse } from "@vercel/node";
import connect from "../../../src/utils/database";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, image, userId } = req.body;
  
    const { db } = await connect();
    
    const response = await db.collection('users').insertOne({
      userId,
      name,
      image,
      level: 1,
      completedChallenges: 0,
      currentExperience: 0,
      accumulateExperience: 0,
      registeredAt: new Date(),
    });

    res.status(200).json(response.ops[0]);
};