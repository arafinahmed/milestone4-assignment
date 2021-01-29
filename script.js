calculateTotal();
function counter(inputFormId, count){
    const seatsCount = document.getElementById(inputFormId);
    let seats = 0;
    if(seatsCount.value!='')
    {
        seats = parseInt(seatsCount.value);
        seats = seats + count;
        if(seats<0){
            seats = 0;        
        }
    }
    else{
        if(count==1){
            seats = 1;        
        }
        else if(count==-1){
            seats = 0;        
        }
    }    
    seatsCount.value = seats;
    calculateTotal();
}

function calculateTotal(){
    const fClassTickets = totalTickets('first-class-count');
    const eClassTickets = totalTickets('economy-class-count');
    const subtotal = fClassTickets*150 + eClassTickets*100;
    const vat = Math.round(subtotal*.1);
    const grandtotal = subtotal + vat;
    document.getElementById('subtotal').innerText = '$'+subtotal;
    document.getElementById('vat').innerText = '$'+vat;
    document.getElementById('grand-total').innerText = '$'+grandtotal;
    console.log(subtotal, vat, grandtotal);
}

function totalTickets(inputFormId){
    const ticketString = document.getElementById(inputFormId).value;
    if(ticketString==''){
        return 0;
    }
    else{
        return parseInt(ticketString);
    }
}

