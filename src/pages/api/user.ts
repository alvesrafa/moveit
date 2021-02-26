import { NowRequest, NowResponse } from '@vercel/node';
import db from '../../utils/db';
export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'POST') {
    try {
      const { email, currentExp, level } = request.body;
      const user = await db
        .collection('users')
        .doc('BR')
        .set({ email, currentExp, level });

      console.log('user', user);

      return response.json({ success: true });
    } catch (e) {
      console.log('Error post', e);
      return response.status(400).json({ success: false });
    }
  } else if (request.method === 'GET') {
    try {
      const users = await db.collection('users');
      // const usersData = users?.docs.map(entry => entry.data());
      return response.json({ users });
    } catch (e) {
      console.log('Error', e);
      return response.status(400).json({ success: false });
    }
  } else {
    return response.json({ message: 'alvesrafa' });
  }
}
