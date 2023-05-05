<script>

    import SavedLogo from "./SavedLogo.svelte";
    
    export let p
    export let savedPicture

</script>

<main>
    <div class="pics">

        <h2>{p.camera.name}</h2>
        <img src={p.img_src} alt="">
        <SavedLogo bind:savedPicture={savedPicture} p={p}/>
    </div>
    
</main>

<style>
   main{
        display:grid;
        grid-template-rows: 10vh 80vh;
        align-items: flex-start;
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
</style>