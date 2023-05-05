<script>
//henter vores variable n fra Browse.svelte i each blokken
export let n
//henter activeArticle fra browse.svelte
export let activeArticle
//laver en vilkårlig variable y
let y
//laver en variable til hvor man var på skærmen (hvor var man på y-aksen)
let whereWasI
//laver en variable til klassen active der rbuges senere
let active
//laver en funktion til at forkorte tekst
const abbr = (str) =>{
    //funktionen har en parameter str som vi manipulerer med
    return str.length > 50 ? str.substring (0,50) + '...': str
}
//asynkron funktion
//vi tager en klasse fra chrome. Chrome skal tjekke igennem de klasser vi har givet dem
//men vi tager klassen fra chrome med vores javascript for hurtigt, så chrome går bare videre og tager de CSS-properties den har fået givet
//er en lidt "snyde" måde fordi det afhænger lidt af computerens kraft med chrome
//det er meget kort tid hvor javascript og chrome kæmper efter klasserne, men med et timeout kan vi justere hvornår vi trkker active
function scrollToTop() {
    if(active){
        active = false
        activeArticle = false
        console.log('scroll back to ', whereWasI)
        setTimeout(()=>{
            window.scrollTo({
                top: whereWasI,
                behavior: 'smooth'    
            })
        }, 2)
    }else{
        whereWasI = y
        active = true
        activeArticle = true
        window.scrollTo({
            top: 0,
            behavior: 'smooth'    
        });
    }
}
</script>

<svelte:window bind:scrollY={y} />

<main>

    
    <div on:click = {scrollToTop} class = {active ? 'active pics' : 'pics'}>
        <h2>{n.title}</h2>
            <div >
                <img src={n.urlToImage} alt="">
            </div> 
            <div>
                <p>By: {n.author}</p>
                
                {#if active}
                <p>{n.description}</p>
                <a href="{n.url}" id="link">link to article</a>
                {/if}
            </div>
       
            
    </div>
   
</main>

<style>
   main{
        display:grid;
        place-items: center;
        color: white;
        height: 100%;
        transition:2s ease-in-out;
        overflow: hidden;
        margin: .5rem;
    }
    .active{
        box-sizing: border-box;
        background-color:rgb(19, 18, 18);
        padding: 1rem;
        position:absolute;
        left:0;
        top:0;
        width:100vw;
        height:70vh;
        z-index: 2;
        overflow: hidden;
        padding-bottom: 1rem;
        display: grid;
        grid-template-rows: repeat(1, 4fr);
        place-items: center;
        
    }
    
    #link{
        justify-self: center;
    }
    

    .pics{
        display:grid;
        place-items:center;
        border:2px solid rgb(48, 51, 54);
        border-radius:10px;
        padding: .5rem;
        transition: 0.8s ease-in-out;
        overflow: auto;
        
   
    }
    .pics h2{
        text-align:center;
        font-size:1rem;
        color: rgb(215, 217, 219);
        z-index: 0;
        margin-bottom: .5rem;
        border-bottom: 2px solid rgb(215, 217, 219);
        padding-bottom: .5rem;
    }
    .pics p{
        text-align:center;
        font-size:1rem;
        color: rgb(215, 217, 219);
        z-index: 0;
        margin-bottom: .5rem;
        margin-top: .5rem;
      
        padding-bottom: .5rem;
       
    }
    .pics img{
        width: 100%;
        transition: 1s ease-in-out;
        object-fit:cover;
  
    }
    
    .active img{
        
        transition: 1s ease-in-out;
        width: 100%;
        height: 50vh;
        object-fit:cover;
        border-radius:0%;
        
        padding: 1rem;
        display: grid;
    }
    
    
    
</style>