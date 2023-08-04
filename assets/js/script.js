// variables
let quantity = document.querySelector('#quantity');
let finalPrice = document.querySelector('#total-final');
let finalAmount = document.querySelector('#quantity-final');

const unitPrice = 936000;

// Change-color
function changeColor() {
    let color = document.getElementById('color').value;
    document.getElementById('color-final').style.backgroundColor = color;
  }

// event-click
document.querySelector('button').addEventListener('click', calculateTotal);

// calculate-total
function calculateTotal () {
    let amount = quantity.value;
    if (isNaN(amount)) {
        alert("Por favor, introduce una cantidad en número.");
    } else {
    let total = amount * unitPrice;
    finalPrice.textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0,
    maximumFractionDigits: 0 }).format(total);
    finalAmount.textContent = amount;
    }
}
