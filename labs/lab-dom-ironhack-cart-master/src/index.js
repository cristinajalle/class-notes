// ITERATION 1

//Step 1: Inside updateSubtotal(), create two variables (we suggest naming them price and quantity) and use your just gained DOM 
//manipulation skills to GET DOM elements that hold price and quantity. 
//To give you a head start, you could use the following code to get the DOM element holding the price:

function updateSubtotal(product) {
  const priceDom = product.querySelector('.price span');
  const quantityDom = product.querySelector('.quantity input');
  // ... your code goes here
  let price = priceDom.innerHTML;
  let quantity = quantityDom.value;
  let subTotal=price*quantity;
  const subtotalDom = product.querySelector(".subtotal span");
  subtotalDom.innerHTML = subTotal;
  return subTotal;
}

//As a single argument, the function should take a DOM node that corresponds to a single tr element with a product class. 
//In the boilerplate code included, we called it product.



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products= document.getElementsByClassName("product");
  let total = 0; // esto inyectado en iteracion 3, nuetsra variable del total.
  for(let i =0;i<products.length;i++){
    let product= products[i];
    let subtotal = updateSubtotal(product);
    total=total + subtotal;
  }
  // console.log(total); //para comprobar que funciona
  
  // "total-value"
  const totalDom = document.querySelector("#total-value span" );
  totalDom.innerHTML= total;




  // ITERATION 3
  //... your code goes here
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
