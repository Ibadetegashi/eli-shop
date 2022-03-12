import admin from "firebase-admin";

import serviceAccount from "../../credentials/eli-shop-firebase-adminsdk-qrban-7ac6e5599e.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;

