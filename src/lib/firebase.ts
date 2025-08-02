import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCdBkKcWZZ_hBO5g-ibfNdLF23jouVZIVQ",
  authDomain: "game-pay-24a83.firebaseapp.com",
  databaseURL: "https://game-pay-24a83-default-rtdb.firebaseio.com",
  projectId: "game-pay-24a83",
  storageBucket: "game-pay-24a83.firebasestorage.app",
  messagingSenderId: "633540301879",
  appId: "1:633540301879:web:ecb82b560a2e3adbd89bb2",
  measurementId: "G-R5KZ8YYHQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);

export default app; 