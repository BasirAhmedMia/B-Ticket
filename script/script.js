
// scroll banner to ticket section
document.getElementById('bnrBtn').addEventListener('click', function(){
    const busTicket = document.getElementById('busticket');
    
    busTicket.scrollIntoView('busticket');
})
// select the button 
let buttons = document.querySelectorAll('.green-btn');

for(const button of buttons){
    button.addEventListener('click', function(){
        let select = button.style.backgroundColor = 'limegreen';
    })
}

