//model - lokal kopi af databasen
let model = {}

//view - den visning vi Nu har valgt at lave af data. med andre ord appen/design 
let htmlWords

//other html elements
let saveButton

function setup(){
    
    //opret reference til html view
    htmlWords = select('#words')
    //opret reference til andre html elementer
    saveButton = select('#saveButton')

   
    //vi vil ikke noget p5 canvas
    noCanvas()

   //controller
   //indsæt dine egne NAVNE
    db.collection('diary-model').doc('diary-id')
        .onSnapshot(doc => {
            console.log(doc.id, doc.data())
            
            //opdater model
            model = doc.data()
            
            //opdaterview
            htmlWords.html('')
            model.days.map( (day, index) => updateView( day, index ) )
            //når der kommer input fra slutbruger opdateres MODELLEN



            saveButton.mousePressed( ()=>{
                console.log('updateing model with mouse pressed')
                db.collection('diary-model').doc('diary-id').update(model)
    
            })
            
            })

         //update databse with model on input
            
        //onsnapshot er den listener vi sætter op. 
        //doc.id = diary
        //dette er vores controller. Snapshottet

            //update databse with model on save!!
        
            
 
}

function updateView( day, index ){
    let newDay = createDiv()
        .addClass('day')
    let newDate = createElement('h3', day.date)
        .addClass('date')
    let newInput = createElement('textArea', day.words)
        .addClass('words')
        //update model with view. input er en eventlistener 
        .input( ()=>model.days[index].words = newInput.value())
    newDay.child(newDate)//child = append
    newDay.child(newInput)
    htmlWords.child(newDay)

}
