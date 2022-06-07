// ITERATION 1

function updateSubtotal(product) {
    
    let price=product.querySelector('.price span');
    let quantity=product.querySelector(".quantity input")
    price=parseFloat(price.innerText);
    quantity=parseFloat(quantity.value);
    let subtotal=product.querySelector(".subtotal span");
    subtotal.innerText=quantity+price;








return quantity+price;






  //... your code goes here
}


function calculateAll() {
let product1=document.querySelector(".product:nth-child(1)");
let product2=document.querySelector(".product:nth-child(2)");

let prod=updateSubtotal(product1);
let prod1=updateSubtotal(product2);
document.querySelector("#total-value span").innerText =prod+prod1;



}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
