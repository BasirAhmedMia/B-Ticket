
// scroll banner to ticket section
document.getElementById('bnrBtn').addEventListener('click', function(){
    const busTicket = document.getElementById('busticket');
    
    busTicket.scrollIntoView('busticket');
})
// select the button 
let buttons = document.getElementsByClassName('green-btn');
let count = 0;
let seatLeft = 8;


for(const button of buttons){
    button.addEventListener('click', function(){
        let select = button.style.backgroundColor = 'limegreen';
        count = count + 1
        setInnerText('total-seat', count);        
    })
}

// seat left

for(const button of buttons){
    button.addEventListener('click', function(){
        seatLeft = seatLeft - 1;
        setInnerText('seat-left', seatLeft);
        
    })
}
// ticket add
const ticketClass = 'Economy';

// seat price
let seatPrice = 550;
function seatPriceCount(){
    const totalSeatPrice = seatPrice * count;
    const priceElement = document.getElementById('total-price').innerText = totalSeatPrice;
    
}


// innerText
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
   
}

