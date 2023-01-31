<script>
	//vi importerer recipe fra vores anden svelte fil
    import Recipe from "./components/Recipe.svelte"

	let query
	//vi laver nogle variabler
	//den ene er et tomt array/objekt. den anden er en query til søgebaren
	let recipes = []
	$: fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query)
	.then(res => res.json())
	.then (json => {
		//console.log(json)
		if(json.meals) recipes = json.meals
	})

</script>

<header>
	
	<div class="query">
		<input bind:value={query} type="text">
	</div>
</header>
<main>
	{#each recipes as recipe}
	 <Recipe {recipe}/>
	{/each}
</main>

<style>
	header{
		display: grid;
		padding: 1rem;
		background-color: gold;
		place-items: center;
		grid-template-columns: 1fr;
		margin-bottom: .5rem;
	}
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		place-items: center;
		gap: .5rem;
	}
</style>