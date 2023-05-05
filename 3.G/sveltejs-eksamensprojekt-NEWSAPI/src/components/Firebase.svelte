<script>
    import * as firebase from 'firebase/app';
    import Article from "./Article.svelte";
    import firebaseConfig from '../firebaseConfig.js';

    
    let savedNews = []

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database;
    
    const newsRef = firebase.database().ref("news");

    newsRef.on("value", (snapshot) => {
        savedNews = snapshot.val()
    })
  


</script>

<main>
    {#each savedNews as s}
         <!-- content here -->
         <div>{s.title}</div>
         
    {/each}

</main>

<style>

</style>