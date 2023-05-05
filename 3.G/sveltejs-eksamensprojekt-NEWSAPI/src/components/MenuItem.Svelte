<script>
    export let title
    export let activePage
 
</script>

<main on:click={()=>activePage = title} class={activePage==title ? 'active' : ''}>
   
        {title}

</main>

<style>
    main{
        cursor:pointer;
        transition:.1s ease-in-out all;
        padding-bottom:.4rem;
        border-bottom-width:0;
        color:white;
        border-bottom:4px solid gray;
        z-index: 4;
    }

    

    .active{
       font-weight: bold;
        border-bottom: solid 2px rgb(69, 154, 233);    
        transform: scale(2);
    }
</style>