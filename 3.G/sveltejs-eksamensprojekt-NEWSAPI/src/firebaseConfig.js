import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDzHfzmud4LGQy5cwZKSV1RPfcIBpsaS_M",
    authDomain: "informatik-eksamensproje-ce85f.firebaseapp.com",
    projectId: "informatik-eksamensproje-ce85f",
    storageBucket: "informatik-eksamensproje-ce85f.appspot.com",
    messagingSenderId: "546065945410",
    appId: "1:546065945410:web:523b5cb6d3d3ca52b86edb",
    measurementId: "G-M11D7042K1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const db = firebase.database();


export const saveToFirebase = article =>{
    const newArticleRef = db.ref('articles').push()

    newArticleRef.set(article)

    console.log('artikel gemt i firebase', article)
}


export default { app, analytics, database, db };
