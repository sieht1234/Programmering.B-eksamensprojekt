<script>
	
	import Article from "./components/Article.svelte";
	import Browse from "./components/Browse.svelte";
	import Frontpage from "./components/Frontpage.svelte";
	import Language from "./components/Firebase.svelte";
	import Search from "./components/Search.svelte";
	import MenuItem from "./components/MenuItem.svelte";
	import Saved from "./components/Saved.svelte"
	import Firebase from "./components/Firebase.svelte";
	let menu = ['Frontpage','Browse', 'Search', 'Saved' ]
	let activePage = menu[1]
	let q = 'everything'
	let apiKey = '94189c26ebd6434da9f01da114b3e217'
	let language 


	
	
</script>

<header>
	<div id="languageBar">
		<select id="select" bind:value={language}>
			<option value="en">🇬🇧English</option>
			<option value="ar">🇸🇦Arabic</option>
			<option value="de">🇩🇪German</option>
			<option value="es">🇪🇸Spanish</option>
			<option value="fr">🇫🇷French</option>
			<option value="he">🇮🇱Hebrew</option>
			<option value="it">🇮🇹Italian</option>
			<option value="nl">🇳🇱Dutch</option>
			<option value="no">🇳🇴Norwegain</option>
			<option value="pt">🇵🇹Portuguese</option>
			<option value="ru">🇷🇺Russian</option>
			<option value="sv">🇸🇪Swedish</option>
			<option value="zh" id="kina">🇨🇳Chinese</option>
			</select>
	</div>
	<div class="menu">
		
	
		{#each menu as title}
			 <MenuItem {title} bind:activePage = {activePage}/>
		{/each}
	</div>
</header>

<main>
	{#if activePage == menu[0]}
		<Frontpage/>
	{:else if  activePage == menu[1]}
		<Browse bind:q={q} bind:language={language}/>
	{:else if  activePage == menu[2]}
		<Search  bind:q={q} bind:language={language}/>
	{:else if  activePage == menu[3]}
		<Saved/>
		<Firebase/>

	{/if}
	
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	:global(*, body){
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		

	}
	main {
		display: grid;
		place-items: center;
		background-color: rgb(19, 18, 18);
		position: relative;
	}

	h1{
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	.menu{
		display: grid;
		place-items: center;
		padding: 1rem;
		height: 10vh;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
		
	}
	#languageBar{
		left: 0;
		position:absolute;
		padding: 2rem;
		

		
	}
	#select{
		border-radius: 5rem;
		background-color:  rgb(19, 18, 18);
		color: rgb(215, 217, 219);
		font-family: 'roboto';
		transition: 1s ease-in-out;
		cursor: pointer;
		padding: .5rem;
		border: 2px solid rgb(48, 51, 54);
		
	}
	#select:hover{
		transform: scale(1);
		background-color: rgb(69, 154, 233);
		font-weight: bold;
		
	}
	#kina{
		background-image: url(/assets/kina.svg);
		background-repeat: no-repeat;
		background-size: contain;
		padding-left: 20px;
		color: blue;
	}
	
	
	
	header{
		display: grid;
		padding: 1rem;
		height: 20vh;
		width: 100%;
		place-items: center;
		background: rgb(19, 18, 18);
		position: fixed;
		z-index: 3;
		
	}
</style>