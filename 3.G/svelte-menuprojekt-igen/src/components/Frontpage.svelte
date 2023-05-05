<script>
    let apod = []
    let surprice = false
    console.log(surprice)
    $: if (surprice = true) {
        fetch('https://api.nasa.gov/planetary/apod?&api_key=FAarAA0KQticC7xRiAyxRdqPDyVygbxaRNTfdZvu')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json) apod = json
        })
    }
</script>

<main class='page'>
    <div class="text">
        <h2>Welcome to the cocktail page</h2>
    </div>
    <button on:click={()=>surprice=!surprice}>
        {#if surprice}
        <h1>ihjore</h1>
        <p>eoiuwds</p>
            
        {/if}

    </button>
    
</main>

<style>
	main{
        display:grid;
        grid-template-rows: 2fr 8fr;

    }

</style>