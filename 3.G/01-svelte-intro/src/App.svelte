<script>
	import{fly} from 'svelte/transition'
 let name;
 let names = ['Big mac', 'Big smoke', 'Chicken Nuggets']
 const removeItem =(i) =>{
	 names.splice(i, 1)
	 names = names
 }

 let magic = false
</script>

<main>
	<h1>Hello customer and welcome to RON, if you have a suggestion to add to the menu please write below. Are you sure you want to add {name} to the menu?</h1>
	<input type = "text" bind:value={name}>
	<button on:click={()=>{names = [...names, name];name = ''}}>add</button>
	<p>Visit the <a href="https://www.betaktengstedt.dk/Home">referrence</a> to learn how to apply for a job at ron.</p>
	
	<button on:click={()=> magic = !magic}>Menuen</button>
	{#if magic}
		 <div class="people">
			 {#each names as n, index}
				  <div transition:fly="{{ y: 200, duration: 2000, delay:index*10 }}" class = 'person' on:click={ ()=>removeItem(index)}>{n} ({index})</div>
			 {/each}
		 </div>
	{/if}
</main>

<style>
	.people{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.person{
		display: grid;
		place-items: center;
		background-color: rgb(240, 200, 68);
		box-shadow: 10px 10px 0px 4px rgb(59, 53, 53);
		height: 10rem;
		color: white;
		font-size: 2rem;
		border-radius: .5rem;
		border:  1px solid black;
	}

	

	main {
		background-color: rgb(218, 51, 40);
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: rgb(240, 200, 68);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>