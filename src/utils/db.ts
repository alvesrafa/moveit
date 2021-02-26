import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
        projectId: serviceAccount.project_id,
      }),
      databaseURL: 'https://moveit-alvesrafa-default-rtdb.firebaseio.com/',
    });
  } catch (error) {
    console.log('deu RUIMMMMM???', error);
    // console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
