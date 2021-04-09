import axios from 'axios';
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
  ],

 
  callbacks: {
    session: async (session: any, user: any, ...rest: any) => {
      session.userId = user.sub.split('|')[1];

      const { db } = await connect();
      const collection = db.collection('users');

      const findUser = await collection.findOne({ userId: session.userId });
      {!findUser && (
        await collection.insertOne({
          userId: session.userId,
          name: user.name,
          image: user.picture,
          level: 1,
          challengesCompleted: 0,
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