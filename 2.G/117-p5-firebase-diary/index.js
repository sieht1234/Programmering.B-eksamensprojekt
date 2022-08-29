//model
let model = {}

//view
let htmlWords

//other html elements
let saveButton

function setup(){
    htmlWords = select('#words')
    //opret reference til html view
    //opret reference til andre html elementer
    saveButton = select('#save-button')
    noCanvas()

   //controller
    db.collection('my-diary').doc('diary')
        .onSnapshot(doc => {
            console.log('modtog data: ',doc.id)
            console.log('og data er: ',doc.data())
            //opdater model
            model = doc.data()
            //opdaterview
            htmlWords.html(model.words)
            htmlWords.input(()=>{
                //console.log(htmlWords.html())
                model.words = htmlWords.html()
                //model er et objekt 
            })
        
        })
        //onsnapshot er den listener vi sætter op. 
        //doc.id = diary
        //dette er vores controller. Snapshottet

        //update database with model
        saveButton.mouseClicked(()=>{
            db.collection('my-diary').doc('diary').update(model)
            
        })
    
}

