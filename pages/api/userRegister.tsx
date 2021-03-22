import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../src/utils/database';

interface ResponseType {
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<void> => {
  const { name, image, userId } = req.body;
  
  if (req.method === 'POST') {
    const { db } = await connect();
    
    const response = await db.collection('users').insertOne({
      userId,
      name,
      image,
      completedChallenges: 0,
      level: 1,
      currentExperience: 0,
      totalExperience: 0,
      registeredAt: new Date(),
    });

    res.status(200).json(response.ops[0]);
    
  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
};