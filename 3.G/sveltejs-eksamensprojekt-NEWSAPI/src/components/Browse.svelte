<script>
// det første vi skal gøre er at hente vores variabler
//vi henter variableen language fra app.svelte
export let language
//Vi henter q fra app.svelte som er everything
export let q
//Vi skal importere subkomponenten Article fra Article.svelte
import Article from "./Article.svelte";
//vi laver en variable 
let errorMessage = ''
let news = []
let activeArticle = false 

    const d = new Date()
    let year = d.getFullYear() + '-'
    let month = d.getMonth() + 1 
    let date = d.getDate()
    if (month < 10){
        month = '0' + month + '-'
    }
    $:console.log(language)
    console.log(date, month, year)
    $: console.log(q + 'is the query')
    $: if(q.length > 1){
            news = []
            //&from=2023-02-28&to=${year}-${month}-${date}
            //&from=${year}-${month}-${day}&to=${year}-${month}-${day}
            //https://newsapi.org/v2/everything?${q}&sortBy=publishedAt&apiKey=94189c26ebd6434da9f01da114b3e217
            fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=popularity&apiKey=94189c26ebd6434da9f01da114b3e217` )
           //https://newsapi.org/v2/everything?q=tesla&from=2023-03-12&sortBy=publishedAt&apiKey=94189c26ebd6434da9f01da114b3e217
            .then(res => {
               if(res.ok){
                   return res.json()
                   errorMessage = ''
                }else{
                    errorMessage = 'Kunne ikke hente data fra NEWSAPI'
                    errorMessage += res.status == 429 ? ' - Prøv igen senere' : ''
                    console.log(res)
                    }
            })
           .then(json => {
               console.log(json)
               if(json.articles) news = json.articles 
           })
       }

</script>

<main class='page'>
    <div class="searchbar">
        
        <select bind:value={q}>
            <option value="" disabled selected>Choose</option>
             <option value="everything">Everything</option>
             <option value="health">Health</option>
             <option value="apple">Apple</option>
             <option value="business">Business</option>
             <option value="entertainment">Entertainment</option>
             <option value="general">General</option>
             <option value="science">Science</option>
             <option value="sports">Sports</option>
             <option value="technology">Technology</option>
            <!-- evt lav flere dropdown menuer som hver har en værdi og lægges sammen-->
        </select>
    </div>
    <!--Polymorfi -->
    <div class={activeArticle ? 'active results' : 'results'}>
        {#if errorMessage != ''}
             <h2>{errorMessage}</h2>
        {/if}


        {#if news.length > 0}
             {#each news as n}                    
                <Article {n} bind:activeArticle={activeArticle}/>
                <button on:click={handleSaveToFirebase}>Gem til Firebase</button>    
            {/each}
        {:else}
            <div class="load">

                <h2>Loader...</h2>
                <img src="./assets/giphy.gif" alt="error: missing">

            </div>

        {/if}
             <!-- else content here -->
   </div>
</main>

<style>
   main{
       display:grid;
       grid-template-rows: 10vh auto;
       align-items: flex-start;
       position: relative;
       top: 20vh;
    }
   .searchbar{
       display:grid;
       background-color:rgb(69, 154, 233);
       width:100vw;
       height:10vh;
       place-items:center;
  
    }
   .results{
       display:grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       justify-content: center;
       align-items: center;
       grid-gap:.5rem;
       width:100vw;
       padding: .2rem;
       position:relative;
      

    }
    .active{
        height:70vh;
        overflow:hidden;
    }
    .load{
        justify-content: center;
        display: grid;
        align-self: center;
        position: absolute;
        top: 13vh;
        left: 40vw;
        width: 40vh;
        height: 40vh;

    }
    .load h2{
    margin-bottom: 2rem;
    color: rgb(215, 217, 219);
   }
   select{
    border-radius: 1rem;
    padding: .2rem .5rem ;
   }
</style>