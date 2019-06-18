const cart = [];
const priceArray = [];
let cartTotal = 0;
const foodCategory = document.getElementById("foodCategory");
const toysCategory = document.getElementById("toysCategory");
const cleaningCategory = document.getElementById("cleaningCategory");
const accessoriesCategory = document.getElementById("accessoriesCategory");
const displayItemsInCart = document.getElementById("itemsInCart");
const checkoutBtn = document.getElementById("checkoutButton");
const cartBanner = document.getElementById("cartInfo");
const cartFullInfo = document.getElementById("cartFull");

const foodLink = document.getElementById("foodLink");
const toysLink = document.getElementById("toysLink");
const cleaningLink = document.getElementById("cleaningLink");
const accessoriesLink = document.getElementById("accessoriesLink");

let addToCartBtns = document.getElementsByClassName("addToCartButton");

const productImage = document.querySelectorAll(".logo");
const productDescription = document.querySelectorAll(".popup");
const productCover = document.querySelectorAll(".productCover");

class NewItem {
    constructor(_newItemName, _newItemPrice){
        this.name = _newItemName;
        this.price = _newItemPrice;
    }
};

foodLink.addEventListener('click', function(){
    foodCategory.scrollIntoView({behavior: "smooth", block: "center"})
});

toysLink.addEventListener('click', function(){
    toysCategory.scrollIntoView({behavior: "smooth", block: "center"});
});

cleaningLink.addEventListener('click', function(){
    cleaningCategory.scrollIntoView({behavior: "smooth", block: "center"});
});

accessoriesLink.addEventListener('click', function(){
    accessoriesCategory.scrollIntoView({behavior: "smooth", block: "center"});

});

let mouseOverHandler = function () {
    for (let index1 = 0; index1 < productCover.length; index1++) {
        productCover[index1].addEventListener("mouseover", function(e){
            for (let index = 0; index < productImage.length; index++) {
                if (productImage[index] === e.target.nextElementSibling) {
                    productDescription[index].style.display = "block";
                }
            }
        })
    }
}

let mouseOutHandler = function () {
    for (let index1 = 0; index1 < productCover.length; index1++) {
        productCover[index1].addEventListener("mouseout", function(e){
            for (let index = 0; index < productImage.length; index++) {
                if (productImage[index] === e.target.nextElementSibling) {
                    productDescription[index].style.display = "none";
                }
            }
        })
    }
}


function calculateTotal() {
    for (let i = 0; i < priceArray.length; i ++){
        cartTotal = (cartTotal + parseInt(priceArray[i]));
    };
};

mouseOverHandler();
mouseOutHandler();

let pElement = document.createElement('p');


for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', function(){
        newItem = new NewItem (addToCartBtns[i].dataset.name, addToCartBtns[i].dataset.price);
        priceArray.push(parseInt(addToCartBtns[i].dataset.price));
        calculateTotal();
        displayTotal.innerHTML = `Total $${cartTotal}`;
        // console.log(priceArray);
        cart.push(newItem);
        console.log(cart);
        let numberOfItemsInCart = document.getElementById("displayItemsInCart");
        numberOfItemsInCart.innerHTML = `Number Of Items ${cart.length}`;
    });
}


function displayCart(){
        for(let i = 0; i < cart.length; i++){
        let pElement = document.createElement('p');
        let pTextNode = document.createTextNode(`${cart[i].name} Price: ${cart[i].price}
        `);
        modalContent.appendChild(pElement);
        pElement.appendChild( pTextNode);
        };
};



// Get the modal
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("cartContent")


// Get the button that opens the modal
let btn = document.getElementById("checkoutButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
checkoutBtn.onclick = function() {
  modal.style.display = "block";
  displayCart();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalContent.innerHTML = '';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalContent.innerHTML = '';
  }
}

displayTotal.innerHTML = `Total $0`;

