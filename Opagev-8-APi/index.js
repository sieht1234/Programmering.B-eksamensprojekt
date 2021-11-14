
const getActivity = () =>{
    fetch('https://www.boredapi.com/api/activity' + document.querySelector('#select-type').value + document.querySelector('#select-pants').value)
        .then(response => response.json() )
        .then (json => {
            console.log
            createCard(json)
        } )

}
const createCard = a  =>{
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML ='participants: '+ a.participants
    document.querySelector('#acc').innerHTML = 'accessibility: '+a.accessibility
    document.querySelector('#price').innerHTML = 'price: '+a.price
    document.querySelector('#cat').innerHTML = 'type: '+ a.type
}

getActivity()
//test

document.querySelector('#fetch').addEventListener('click', getActivity)