<script>
	

	let savedCocktails = []

	let cocktail

	const getCocktail = () => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(json => {
			cocktail = json.drinks[0]
			console.log(cocktail)
		})
	}

	const saveCocktail = () =>{
		savedCocktails = [...savedCocktails, cocktail]
		
	}


	
</script>

<main>

		
	{#if cocktail}
	<div class="cocktail">
		<div class="description">
			<h2>{cocktail.strDrink}</h2>
			<p>{cocktail.strInstructions}</p>
		</div>
		<img src="{cocktail.strDrinkThumb}" alt="">
	</div>
	{/if}
	<button on:click={getCocktail}>cock mee!</button>
	<button on:click={saveCocktail}>save my cock! giggity</button>

</main>


{#each savedCocktails as cocktail, index}
<div class="description">
	<h2>{cocktail.strDrink}</h2>
	<p>{cocktail.strInstructions}</p>
</div>
<img src="{cocktail.strDrinkThumb}" alt="">
{/each}

<style>
	
	main{
		border: 1px solid gold;
		border-radius: 1rem;
		padding: 1rem;
	}

	.cocktail{
    display:grid;
    grid-template-columns: 2fr 1fr;
    width:50vw;
    box-shadow: 1rem 1rem 1rem 1rem black; 
            /* x akse, y akse, blur, spredning, farve */
}
.cocktail img{
    width:100%;
    height:100%;
    object-fit: cover; /* fyld rammen med billedet så godt som muligt */
} 
.cocktail .description{
    padding:1rem;
}
</style>