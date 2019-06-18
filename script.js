const cart = [];
const priceArray = [];
let cartTotal = 0;
const foodCategory = document.getElementById("foodCategory");
const toysCategory = document.getElementById("toysCategory");
const cleaningCategory = document.getElementById("cleaningCategory");
const accessoriesCategory = document.getElementById("accessoriesCategory");
const displayItemsInCart = document.getElementById("itemsInCart");
const checkoutBtn = document.getElementById("checkoutButton");
const continueShoppingBtn = document.getElementById("continueShoppingButton");
const modal2CheckoutBtn = document.getElementById("modal2Checkout");
const cartBanner = document.getElementById("cartInfo");
const cartFullInfo = document.getElementById("cartFull");
const cartLogoContainer = document.getElementById("cartLogoContainer");
const cartLogoItemCounter = document.getElementById("cartLogoNumber");
const modalCloser = document.getElementById("modalCloser");
const modal2Closer = document.getElementById("modal2Closer");
const subTotalContainer = document.getElementById("subTotal");
const taxContainer = document.getElementById("tax");
const totalContainer = document.getElementById("total");

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

cartLogoContainer.addEventListener("click", itemizedCart);


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
        // console.log(priceArray);
        cart.push(newItem);
        console.log(cart);
        cartLogoItemCounter.innerHTML = cart.length;
        subTotalContainer.innerHTML = (`Subtotal: $${cartTotal}`);
        let salesTax = (cartTotal * .06);
        let total = cartTotal + salesTax;
        taxContainer.innerHTML = (`Tax: $${salesTax}`);
        totalContainer.innerHTML = (`Grand Total: $${total}`);

    });
}


function itemizedCart(){
        for(let i = 0; i < cart.length; i++){
        let pElementName = document.createElement('p');
        pElementName.className = ("itemizedCartName");

        let pElementPrice = document.createElement('p');
        pElementPrice.className = ("itemizedCartPrice");

        let linebreak = document.createElement("br");

        let pTextNodeName = document.createTextNode(`${cart[i].name}`);
        let pTextNodePrice = document.createTextNode(` Price: $${cart[i].price}`)

        modalContent2.appendChild(pElementName);
        pElementName.appendChild( pTextNodeName);

        modalContent2.appendChild(pElementPrice);
        pElementPrice.appendChild( pTextNodePrice);

        modalContent2.appendChild(linebreak);

        
        
        };
};





// Get the modal
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modalContent = document.getElementById("cartContent");
let modalContent2 = document.getElementById("modal2Content");


// Get the button that opens the modal
let btn = document.getElementById("checkoutButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
checkoutBtn.onclick = function() {
  modal.style.display = "block";
};
cartLogoContainer.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalCloser.onclick = function() {
  modal.style.display = "none";
  modalContent.innerHTML = '';
}
modal2Closer.onclick = function() {
    modal2.style.display = "none";
    modal2Content.innerHTML = '';
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalContent.innerHTML = '';
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
    modal2Content.innerHTML = '';
  }
}

continueShoppingBtn.addEventListener("click", ()=>{
    modal2.style.display = "none";
    modal2Content.innerHTML = '';
});

modal2CheckoutBtn.addEventListener("click", ()=>{
    modal2.style.display = "none";
    modal2Content.innerHTML = '';
    modal.style.display = "block";
});


