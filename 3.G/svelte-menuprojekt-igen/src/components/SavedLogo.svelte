<script>
    let active = false
    export let savedPicture = []
    export let p

    const addPic = () =>{
        savedPicture = [...savedPicture, p]
        active = false
    }
    const remPic = () => {
        savedPicture = savedPicture.filter ( isMe => isMe != p)
        active = false
    }
</script>

<main>
    {#if active}
        <img on:click={remPic} src ="/public/assets/normal.svg"alt="">
    {:else}
        <img on:click={addPic} src ="/public/assets/saved.svg"alt="">
    {/if}
</main>

<style>
    main{
        display: grid;
        height:  20px;
        width: 20px;
    }
</style>