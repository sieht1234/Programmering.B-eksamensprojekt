<script>
    import * as firebase from 'firebase/app';
    import Article from "./Article.svelte";
    import firebaseConfig from '../firebaseConfig.js';

    
    export let savedNews

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
         <Article {s}/>
         
    {/each}

</main>

<style>
    main{
       display:grid;
       grid-template-rows: 10vh auto;
       align-items: flex-start;
       position: relative;
       top: 20vh;
       height: 100vh;
       width: 100vw;
    }
</style>