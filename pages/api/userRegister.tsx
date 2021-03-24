import { VercelRequest, VercelResponse } from "@vercel/node";
import connect from '../../src/utils/database';

export default async (
  req: VercelRequest,
  res: VercelResponse
) => {
  const { 
    name, 
    image, 
    userId, 
    completedChallenges,
    level,
    currentExperience,
    totalExperience } = req.body;
  
  if (req.method === 'POST') {
    const { db } = await connect();
    
    const response = await db.collection('users').insertOne({
      _id: userId,
      name,
      image,
      completedChallenges: 0,
      level: 1,
      currentExperience: 0,
      totalExperience: 0,
      registeredAt: new Date(),
    });

    res.status(200).json(response.ops[0]);
    
  } else if (req.method === 'PUT') {
    const { db } = await connect();

    const response = await db.collection('users').findOneAndUpdate(
      {_id: userId},
      {
        $set: { completedChallenges, level, currentExperience, totalExperience },
      }
    );

    return res.status(200).json(response);

  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
};