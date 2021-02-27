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
      const { level, email, currentExp, challengesCompleted } = request.body;

      const db = await connectToDatabase(process.env.MONGODB_URI);

      const collection = db.collection('users');

      const update = await collection.findOne({ email: email });

      console.log('update', update);
      if (update) {
        await collection.updateOne(
          { _id: update._id },
          { $set: { level, currentExp, challengesCompleted } }
        );
      } else {
        await collection.insertOne({
          level,
          email,
          currentExp,
          challengesCompleted,
        });
      }

      return response.status(201).json({ success: true });
    } catch (e) {
      return response.status(400).json({ success: false });
    }
  } else if (request.method === 'GET') {
    try {
      const db = await connectToDatabase(process.env.MONGODB_URI);

      const collection = db.collection('users');
      let users = [];
      await collection.find().toArray((err, result) => {
        if (err) throw err;
        users = result || [];
        return true;
      });

      return response.status(200).json({ success: true, users: users || [] });
    } catch (e) {
      console.log('FAILED GET', e);
      return response.status(400).json({ success: false });
    }
  } else {
    return response
      .status(200)
      .json({ success: true, message: 'by alvesrafa' });
  }
}
