let api_key = '5h8ZM068M7ErvaDcn1eGsjiPJaNPgyqJ'
//vi spørger en server om nogle resurser. Derefter får vi et håndtryk eller et nej. Vi skal åben en stream og åbne det json vi vil have fat i//

//efter key bruger vi quickstartguide til at lave en limit. limit &rating er strings, og man skal brge & til flere
fetch('http://api.giphy.com/v1/gifs/trending?api_key='+api_key +'&limit=20&rating=pg-13')
    .then(response => response.json())
    .then(json => {
        //data er vores url//
        json.data.map( image => insertImage(image.images.fixed_width.url) )
        
    })



    const insertImage = (url) =>{
        let img = document.createElement('img')
        img.src = url
        document.querySelector('body').append(img)
    }