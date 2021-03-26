import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import connect from '../../../src/utils/database';

const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],

  callbacks: {
    session: async (session: any, user: any, ...rest: any) => {
      const textToReplace = 'https://avatars.githubusercontent.com/u/';
      const remainingText = user.picture.replace(textToReplace, "");
      session.userId = remainingText.split('?')[0];
      
      const { db } = await connect();
      const collection = db.collection('users');

      const findUser = await collection.findOne({ userId: session.userId });

      {!findUser && (
        await collection.insertOne({
          userId: session.userId,
          name: user.name,
          image: user.picture,
          challengesCompleted: 0,
          level: 1,
          currentExperience: 0,
          accumulateExperience: 0,
          registeredAt: new Date(),
        })
      )};

      return Promise.resolve(session);
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);