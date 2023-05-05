<script>
    import {onMount} from 'svelte'
    import {db} from '../firebaseConfig'
    

    let articles = []
    export let savedNews

    const updateArticles = (snapshot) =>{
        let newArticles = []

        snapshot.forEach((childSnapshot)=>{

            const article = childSnapshot.val()

            newArticles.push(article)

        })

        articles = newArticles
    }

    onMount(()=>{
        db.ref('articles').on('value', updateArticles)
    })

    //firebase.initializeApp(firebaseConfig);
    //const db = firebase.database;
    
    //const newsRef = firebase.database().ref("news");

    //newsRef.on("value", (snapshot) => {
      //  savedNews = snapshot.val()
   // })
  
        const handleRemoveFromFirebase = (articles)=>{
            const articleRef = db.ref('articles/${article.id}')

            articleRef.remove()

            console.log('artikel er blevet fjernet fra firebase', article)
        }

</script>

<main>
    {#each articles as article}
         <!-- content here -->
         <h2>{Article.title}</h2>
         <p>{article.description}</p>
         <button on:click={()=> handleRemoveFromFirebase(article)}> fjern fra firebase</button>
         
         
    {/each}

</main>

<style>
    main{
       display:grid;
       grid-template-rows: 10vh auto;
       align-items: flex-start;
       position: relative;
       top: 20vh;
       height: 100vh;
       width: 100vw;
    }
</style>