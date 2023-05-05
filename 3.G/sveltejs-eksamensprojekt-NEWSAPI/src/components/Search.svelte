<script>
//vi skal hente vores variable language fra app.svelte
export let language
//vi skal også hente vores query variable (der står for hvad man søger efter) fra app.svelte
export let q
//vi skal hente Article fra subkomponenten Article.svelte da den indeholder koden til hver nyhedsartikel
import Article from "./Article.svelte";
//Vi laver en variable med en tom string, hvis der kommer en fejl
let errorMessage = ''
//laver et array til nyhederne fra API'et
let news = []
//laver variablen activeArticle og sætter den til false, når artiklerne skal vises
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

    $: console.log(q + ' is the query')
    //lvaer vores fetch funktion, som function search, som vi kalder når man trykker på SVG - billedet
        function search() 
            {
                console.log(language)
                //sikre at vores array med nyheder kommer med
                news = []
                //&from=2023-02-28&to=${year}-${month}-${date}
                //&from=${year}-${month}-${day}&to=${year}-${month}-${day}
                //https://newsapi.org/v2/everything?${q}&sortBy=publishedAt&apiKey=94189c26ebd6434da9f01da114b3e217
                //starter fetch kaldet ved at hente fra API'et (NEWSAPI)
                // API'et har nogle parametre i sit kald, dette kan være q, category, language osv. Alle queries kan findes inde på NEWSAPI's hjemmeside
                // vi indsætter vores variable q (query = søge ord) ind i URL adressen, så vi fetcher efter det der står i q, det samme gør vi med language, hvor man veælger sprog
                fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=popularity&apiKey=94189c26ebd6434da9f01da114b3e217` )
               //https://newsapi.org/v2/everything?q=tesla&from=2023-03-12&sortBy=publishedAt&apiKey=94189c26ebd6434da9f01da114b3e217
               //når vi har spurgt efter om vi må få data fra API'et, får vi et response objekt (et OK fra serven at vi godt må få adgang)
            .then(res => {
                //hvis vi får et OK fra serveren skal vi returnere vores svar til JSON
                if(res.ok){
                    return res.json()
                    //errorMessage bliver tom fordi vi har fået adgang
                    errorMessage = ''
                    //hvis vi ikke får et OK fra serveren 
                }else{
                    //så skal errorMessage være kunne ikkde hente data, som tekst
                    errorMessage = 'Kunne ikke hente data fra NEWSAPI'
                    //derudover giver vi den en fejlkode, hvis vores response status er 429, viser vi på web-appen prøv igen senere
                    errorMessage += res.status == 429 ? ' - Prøv igen senere' : ''
                    console.log(res)
                    }
            })
            .then(json => {
                //når vi har fået et OK fra serveren, går vi tilbage til den og kalder efter dataene og får et som JSOn objekter
                console.log(json)
                //hvis vi får JSON skal vi tage fat i arrayets articler og sætter vores variable news til at være APi'ets artikler, så vi hurtigt og nemt kan reffere til artiklerne (hvilket er hoved "arrayet" i response objektet)
                if(json.articles) news = json.articles 
            })
           }
        
    
    </script>
    
    <main class='pics'>

       <div class="header">

           <div class="input">
                   <input id="type" type="text" bind:value={q}>
                   <img src="./assets/search.svg" alt="" id="searchButton" on:click={search}>
           </div>
       </div>

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
        
                        <h2>You haven't searched for anything</h2>
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
        .header{

            display:grid;
            background-color:rgb(69, 154, 233);
            width:100vw;
            height:10vh;
            grid-template-columns: 1fr ;
            place-items: center;
        }
       .input{
            background-color:rgb(69, 154, 233);
           
           
           
           
           
           
           
           
           
           
           
           
     
      
        }
        #type{
            border-radius: 5rem;
            border: 1px ;
            padding: .5rem;
            padding-left: 1rem;
            margin-top: .5rem;
            width: fit-content;
            place-self: center;
            float: left;
            
           
            
           
           
            

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
        color: rgb(0, 0, 0);
       }
       
       #searchButton{
        align-self: center;
        border-radius: 5rem;
        cursor: pointer;
        transition: 1s ease-in-out;
    
        width: fit-content;
        height: fit-content;
        margin-top: .5rem;
        transition: 1s ease-in-out;
        
        
        
    
        
        
       }
       #searchButton:hover{
		transform: scale(1);
		background-color: rgb(233, 224, 224);
		font-weight: bold;
        
	}
       
    </style>