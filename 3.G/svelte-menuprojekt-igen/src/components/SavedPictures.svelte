<script>
    import Picture from "./Picture.svelte";
    export let savedPicture
    console.log(savedPicture)

</script>

<header class="page">
    <h1>Saved pictures</h1>
    {#each savedPicture as sP}
         <Picture />
    {/each}

</header>

<main class='page'>
</main>

<style>
    
</style>