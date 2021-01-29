calculateTotal();
function counter(inputFormId, count) {
    const seatsCount = document.getElementById(inputFormId);
    let seats = 0;
    if (seatsCount.value != '') {
        seats = parseInt(seatsCount.value);
        seats = seats + count;
        if (seats < 0) {
            seats = 0;
        }
    }
    else {
        if (count == 1) {
            seats = 1;
        }
        else if (count == -1) {
            seats = 0;
        }
    }
    seatsCount.value = seats;
    calculateTotal();
}

function calculateTotal() {
    const fClassTickets = totalTickets('first-class-count');
    const eClassTickets = totalTickets('economy-class-count');
    const subtotal = fClassTickets * 150 + eClassTickets * 100;
    const vat = Math.round(subtotal * .1);
    const grandtotal = subtotal + vat;
    document.getElementById('subtotal').innerText = '$' + subtotal;
    document.getElementById('vat').innerText = '$' + vat;
    document.getElementById('grand-total').innerText = '$' + grandtotal;
}

function totalTickets(inputFormId) {
    const ticketString = document.getElementById(inputFormId).value;
    if (ticketString == '') {
        return 0;
    }
    else {
        return parseInt(ticketString);
    }
}

const book = document.getElementById('book-now');
book.addEventListener('click', function(){
    document.getElementById('f-class-seats').innerText = totalTickets('first-class-count');
    document.getElementById('e-class-seats').innerText = totalTickets('economy-class-count');
    document.getElementById('total-cost').innerText = document.getElementById('grand-total').innerText;

    document.getElementsByClassName('booking-form')[0].style.display = 'none';
    document.getElementsByClassName('booking-confirm')[0].style.display = 'block';
});

