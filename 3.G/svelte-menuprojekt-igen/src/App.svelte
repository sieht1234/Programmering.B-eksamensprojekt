<script>
	import MenuItem from './components/MenuItem.svelte'
	import Frontpage from './components/Frontpage.svelte'
	import Findpicture from './components/Findpicture.svelte'
	import SavedPictures from './components/SavedPictures.svelte'
	import SavedLogo from './components/SavedLogo.svelte';
	import Picture from './components/Picture.svelte'
	let menu = ['frontpage', 'Find pictures', 'Saved pictures']
	let activePage = menu[1]
	let savedPicture = []
	
</script>

<header>
	{#each menu as item}
		<MenuItem bind:activePage={activePage} title={item} />
	{/each}
</header>
<main>
	{#if activePage == menu[0]}
		<Frontpage/>
	{:else if  activePage == menu[1]}
		<Findpicture bind:savedPicture = {savedPicture}/>
		
	{:else if  activePage == menu[2]}
		<SavedPictures />
	{/if}
	
</main>
<style>
	:global(*, body){
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	:global(.page){
		display:grid;
		place-items:center;
		height:90vh;
	}
	header{
		display:grid;
		height:10vh;
		grid-auto-flow:column;
		place-items:center;
		background:black;
	}
	main {
		display:grid;
		place-items:center;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
</style>