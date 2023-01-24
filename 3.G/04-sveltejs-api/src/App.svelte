<script>
	let animals = [ 
	{"name" : "hund"}, 
	{"name": "kakerlak"}, 
	{"name": "due"}, 
	{"name": "måge"}, 
	{"name": "jaguar"}, 
	{"name": "muuhKo"}, 
	{"name":"gris"}, 
	{"name":"anders And"}, 
	{"name":"Jake fra eventyrtid"}, 
	{"name":"Rancor"} ]

	

</script>

<main>
	<div class="header">
		<h1>funnee dyr</h1>
	</div>
	<div class="animals">

		{#each animals as a}
			 <div class="animal" >
				 <h2>{a["name"]}</h2>
			 </div>
		{/each}
	</div>
</main>

<style>



.header{
	background-color: hotpink;
	display: grid;
	place-items: center;
	color: whitesmoke;
}

.animal{
	border-radius: 50%;
	border: 1px solid rgb(49, 41, 33);
	display: grid;
	place-items: center;
	width: 250px;
	height: 250px;
	



}
.animals{
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 1rem;
	place-items: center;
	background-image: ("public/black-guy-suit-black-guy-funny.gif");

}


</style>