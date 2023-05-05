<script>
    import Article from './Article.svelte';
    import firebase from '../firebaseConfig.js'
    
    let saveNew = []

    async function getNews() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY");
    const { articles } = await response.json();
    saveNew = articles;
    }

    async function saveNews() {
    await firebase.ref("news").set(saveNew);
    }

</script>
    



<main>
    <button on:click={getNews}>Get News</button>
    <button on:click={saveNews}>Save News</button>

</main>

<style>

</style>