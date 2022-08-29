//model - lokal kopi af databasen
let model = {}

//view - den visning vi Nu har valgt at lave af data. med andre ord appen/design 
let htmlWords

//other html elements

function setup(){
    
    //opret reference til html view
    //opret reference til andre html elementer
   
    //vi vil ikke noget p5 canvas
    noCanvas()

   //controller
   //indsæt dine egne NAVNE
    db.collection('collection-name').doc('doc-name')
        .onSnapshot(doc => {
            //det er her firebase er reaktiv, hver gang data forandre sig, får snapshot besked og gør det den skal gøre

            
            //opdater model
            
            //opdaterview
            
            //når der kommer input fra slutbruger opdateres MODELLEN
            
            })

            //update databse with model on input
            
        //onsnapshot er den listener vi sætter op. 
        //doc.id = diary
        //dette er vores controller. Snapshottet

        
    
}

