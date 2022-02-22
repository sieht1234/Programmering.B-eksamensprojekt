const firebaseConfig = {
    apiKey: "AIzaSyCddVcnxEB8Fis5R23yIPAaLqK89VAvTkg",
    authDomain: "p5-diary-94051.firebaseapp.com",
    projectId: "p5-diary-94051",
    storageBucket: "p5-diary-94051.appspot.com",
    messagingSenderId: "29770272543",
    appId: "1:29770272543:web:a797d48a002aca5372ea2a"
  }
  
//start firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


//viewmodel controller
//model er en lokal kopi af databasen. den del af databasen vi vil vise

//controller. er js functioner kopiere databsen. Vi har en lokal kopi og nogle gnage vi vi opdatere den