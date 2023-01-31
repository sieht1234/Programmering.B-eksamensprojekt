<script>
    export let recipe // javascript objekt med en hel opskrift
    console.log(recipe)
    let active = false 
</script>

<main on:click={()=>active=!active} class={active ? 'active' : ''} style='background-image:url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>
    {#if active}
        <div class="description">
            <h2>category: {recipe.strCategory}</h2>
            <h3>ingredients</h3>
            <ul>
                <li>{recipe.strIngredient1}: {recipe.strMeasure1}</li>
                <li>{recipe.strIngredient2}: {recipe.strMeasure2}</li>
                <li>{recipe.strIngredient3}: {recipe.strMeasure3}</li>
                <li>{recipe.strIngredient4}: {recipe.strMeasure4}</li>
                <li>{recipe.strIngredient5}: {recipe.strMeasure5}</li>
                <li>{recipe.strIngredient6}: {recipe.strMeasure6}</li>
                <li>{recipe.strIngredient7}: {recipe.strMeasure7}</li>
            </ul>
            
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
            <h3>youtube</h3>
            
            <a href={recipe.strYoutube}> <p>{recipe.strYoutube}</p></a>

        </div>
         <!-- content here -->
    {/if}
</main>

<style>
    .description{
        background-color:rgba(0, 255, 255, 0.411);
        border-radius: .5rem;
        border: 1px solid black;
        place-items: center;
        padding: 1rem;
    }
    main{
        height:400px;
        width:100%;
        display:grid;
        place-items:center;
        font-weight: 100;
        color:white;
        border-radius:1rem;
        transition: all 1s ease-in-out;
    }
    .active{
        transition: all 1s ease-in-out;
        width:100vw;
        height:100vh;
        z-index:2;
        position:absolute;
        left:0;
        top:0;
        background-size: cover;
        padding: .5rem;
    }
</style>