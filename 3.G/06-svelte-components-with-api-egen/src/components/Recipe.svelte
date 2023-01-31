<script>
    export let recipe //javascript med en hel opskrift
    console.log(recipe)
</script>

<main style = 'background-image:url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>
</main>

<style>
    main{
        height: 400px;
        width: 100%;
        display: grid;
        place-items: center;
        font-weight: 100;
        color: white;
        border-radius: 1rem;
        border: 1px solid gold;
    }
</style>