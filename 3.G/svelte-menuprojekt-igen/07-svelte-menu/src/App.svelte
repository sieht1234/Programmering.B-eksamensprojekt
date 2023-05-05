<script>
	import Menuitem from './components/Menuitem.svelte'
	import Frontpage from './components/Frontpage.svelte'
	import SavedDestinations from './components/SavedDestinations.svelte'
	import TravelDestinations from './components/TravelDestinations.svelte'
	let menu = ['frontpage', 'travel destinations', 'saved destinations']
	let activePage = menu[0]
</script>

<header>
	{#each menu as item}
		 <Menuitem bind:activePage={activePage} title = {item}/>
	{/each}

</header>
<main>
	{#if activePage == menu[0]}
		 <Frontpage />
	{:else if  activePage == menu[1]}
		 <TravelDestinations />
	{:else if  activePage == menu[2]}
		 <SavedDestinations />
	{/if}

</main>

<style>
	:global(*, body){
		box-sizing: border-box;
		margin: 0;
		padding: 0;

	}
	header{
		display: grid;
		height: 10vh;
		grid-auto-flow: column;
		place-items: center;
	}
	main {
		display: grid;
		place-items: center;
	}
</style>