<script>
    export let language
    export let q
    import Article from './Article.svelte';
    import firebase from '../firebaseConfig.js'
    
    export let savedNews

    async function getNews() {
    const response = await fetch("https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=popularity&apiKey=94189c26ebd6434da9f01da114b3e217");
    const { articles } = await response.json();
    savedNews = articles;
    }

    async function saveNews() {
        await firebase.ref("news").set(savedNews);
    }

</script>
    



<main>
    <h1>prut</h1>
    <button on:click={getNews}>Get News</button>
    <button on:click={saveNews}>Save News</button>

</main>

<style>
    main{
       display:grid;
       grid-template-rows: 10vh auto;
       align-items: flex-start;
       position: relative;
       top: 20vh;
    }

</style>