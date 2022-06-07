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
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  debugger
  
  
  //... your code goes here




}

// ITERATION 5

function createProduct() {
let itemName=document.getElementById("newProdName");
let itemPrice=document.getElementById("newProdPrice")
let table= document.querySelector("tbody");

const node = document.createElement("tr");
node.innerHTML=' <td class="name"> <span>'+itemName.value+'</span></td><td class="price">$<span>'+itemPrice.value+'</span></td><td class="quantity">   <input type="number" value="0" min="0" placeholder="Quantity" /></td> <td class="subtotal">$<span>0</span></td>  <td class="action">    <button onclick="removeProduct(event)" class="btn btn-remove">Remove</button></td>'
table.appendChild(node)




  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
