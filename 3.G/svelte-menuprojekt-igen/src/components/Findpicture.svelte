<script>
 let q = ''
 let pictures = []
 export let savedPicture
 import Picture from "./Picture.svelte"

 

 $: console.log(q + ' is the query')
 $: if (q.length > 1) {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?sol=1000&api_key=FAarAA0KQticC7xRiAyxRdqPDyVygbxaRNTfdZvu')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.photos) pictures = json.photos 
        })
    }
</script>

<main class='page'>
    <div class="searchbar">
        <input type="text" bind:value={q} on:click={()=> q = ''}>
    </div>
    <div class="results">
        {#each pictures as p}
            
            <Picture {p} bind:savedPicture={savedPicture}/>

        {/each}
    </div>
</main>

<style>
    main{
        display:grid;
        grid-template-rows: 10vh 80vh;
        align-items: flex-start;
    }
    .searchbar{
        display:grid;
        background-color: rgb(34, 92, 208);
        width:100vw;
        height:100%;
        place-items:center;
    }
    input{
        border-radius: .6rem;
        width:60vw;
        text-align: center;
    }
    .results{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
        justify-content: center;
        align-items: center;
        grid-gap:.5rem;
        width:100vw;
        padding: .2rem;
        overflow: scroll;
    }
    .pics{
        display:grid;
        min-width:100px;
        height:120px;
        grid-template-rows: 1fr 2fr;
        place-items:center;
        border:1px solid black;
        border-radius:5px;
        padding:.5rem;
        margin-bottom: 1rem;
        transition:.1s ease-in-out all;
        
    }
    .pics h2{
        text-align:center;
        font-size:.5rem;
    }
    .pics img{
        width: 90px;
        height:80px;
        object-fit:cover;
        border-radius:10%;
    }
    .pics:hover{
        transform:scale(1.1);
    }
</style>