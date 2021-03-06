import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, ObjectID } from 'mongodb';
import url from 'url';

let cachedDb: Db = null;

const connectToDatabase = async (uri: string) => {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('moveit');
  cachedDb = db;
  return db;
};

export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'POST') {
    try {
      const {
        level,
        email,
        currentExp,
        challengesCompleted,
        photo,
      } = request.body;

      const db = await connectToDatabase(process.env.MONGODB_URI);

      const collection = db.collection('users');

      const update = await collection.findOne({ email: email });

      if (update) {
        await collection.updateOne(
          { _id: update._id },
          { $set: { level, currentExp, challengesCompleted, photo } }
        );
      } else {
        await collection.insertOne({
          level,
          email,
          currentExp,
          challengesCompleted,
          photo,
        });
      }

      return response.status(201).json({ success: true });
    } catch (e) {
      return response.status(400).json({ success: false });
    }
  } else if (request.method === 'GET') {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('users');

    return new Promise((resolve, reject) => {
      collection
        .find()
        .sort({ level: -1 })
        .toArray((err, docs) => {
          if (err)
            return response
              .status(400)
              .json({ success: false, error: reject(err) });

          return response.status(200).json({ success: true, users: docs });
        });
    });
  } else {
    return response
      .status(200)
      .json({ success: true, message: 'by alvesrafa' });
  }
}
