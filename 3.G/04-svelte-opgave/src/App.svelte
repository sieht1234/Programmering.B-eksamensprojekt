<script>
   
	
	let src = "images/encore-steve-kopi.jpg"
	let number 
	let smiley

	$: if(number > 0.5) {
		smiley = "😊"
		src = "images/encore-steve-kopi.jpg"

		
	}else{
		smiley = "🙈"
		src = "images/thriller-cj-edition-kopi.jpg" 

		
	}
	console.log(number)

</script>

<main>
	<div class="header">
		<p>{smiley}</p>
		<button on:click={()=>number = Math.random(1)}>klik mig</button>

	</div>
	<div class="images">

		<img {src} alt="steve">
	</div>

</main>

<style>
	
	.header{
		display: grid;
		grid-template-rows: 1fr;
		place-items: center;
		border: 1px solid black;
		border-radius: 10%;
		width: 100vw;
		height: 20vh;
	}
	.images{
		display: grid;
		place-items: center;
		width: 100vh;
		height: 50vh;
	
		padding: 1rem;
		background-size: cover;
	}
</style>