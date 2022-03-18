import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

// eslint-disable-next-line no-unused-vars
let app = null
// eslint-disable-next-line import/namespace
if (!firebase.apps.length) {
  // eslint-disable-next-line import/namespace
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
