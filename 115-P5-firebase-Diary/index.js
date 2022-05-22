let model = ''
//view
let htmlWords
//ohter html elemnts
let saveButton

let slet

let date

function setup(){
    date = new Date().toLocaleDateString()
    console.log(date)
  
    
    //opret reference til html wiew
    htmlWords = select('#words')
    //opret referncer til andre html elemnter
    saveButton = select('#save-button')
    noCanvas()
    //controller
    db.collection('diary-id').doc('diary-id')
        .onSnapshot( doc => {
            console.log('Modtog data:', doc.id)
            console.log('Og data er:', doc.data())
            //opdatere model
            model = doc.data()
            //opdatere view
            model.days.slice(0).reverse().map(day => {
                console.log(day)
                createCard(day)
            })
        } )
        //opdate database with model
        saveButton.mouseClicked( () => {

        //bascilly this part is what info is pushed to fire base               
        let newEntry = {
            date:date,
            words:select('#words').value()
        }

        model.days.push(newEntry)
        console.log(model)
        select('.cardholder').html('')
        select('#words').value('')
        db.collection('diary-id').doc('diary-id').update(model)
    })


}


//making the cards with, dates and words
function createCard(day){
    let card = createDiv().addClass('card')
    let holder = createDiv().addClass('holder')
    card.child(holder)
    select('.cardholder').child(card)

    
    holder.child(createDiv(day.date).addClass('date'))

    card.child(createDiv(day.words).addClass('words'))
}


//the size of the input bar, where you can write things, and it expands when you write stuff
function draw(){
    if(select('#words').value() == ""){
        select('#words').style('height', '2.5rem')
    } else{
        console.log('palme')
        select('#words').style('height', '25vh')
    }
  
}
