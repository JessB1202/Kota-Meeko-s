const cart = [];
const priceArray = [];
let cartTotal = 0;
let displayTotal = 0;
let total = 0;
let salesTax = 0;
let cashValue;
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
const receiptSubtotal = document.getElementById("receiptSubtotal");
const receiptTax = document.getElementById("receiptTax");
const receiptTotal = document.getElementById("receiptTotal");
const amountApplied = document.getElementById("receiptApplied");
const receiptChange = document.getElementById("receiptChange");

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

//Scroll functionality for each category from the navigation bar. 
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
checkoutBtn.addEventListener("click", itemizedCart);

//function to show detailed product descriptions upon mouseover
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

//function to hide product descriptions upon mouseout
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

//calling the product description functions
mouseOverHandler();
mouseOutHandler();

let pElement = document.createElement('p');


for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', function(){
        newItem = new NewItem (addToCartBtns[i].dataset.name, addToCartBtns[i].dataset.price);
        priceArray.push(parseInt(addToCartBtns[i].dataset.price));
        calculateTotal();
        console.log(priceArray);
        displayTotal = (parseInt(displayTotal) + parseInt(addToCartBtns[i].dataset.price));
        console.log(priceArray);
        cart.push(newItem);
        console.log(cart);
        cartLogoItemCounter.innerHTML = cart.length;
        subTotalContainer.innerHTML = (`Subtotal: $${displayTotal}`);
        salesTax = (displayTotal * .06)
        total = displayTotal + salesTax;
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

function receiptItemizedCart(){
    for(let i = 0; i < cart.length; i++){
    let pElementName = document.createElement('p');
    pElementName.className = ("itemizedCartName");

    let pElementPrice = document.createElement('p');
    pElementPrice.className = ("itemizedCartPrice");

    let linebreak = document.createElement("br");

    let pTextNodeName = document.createTextNode(`${cart[i].name}`);
    let pTextNodePrice = document.createTextNode(` Price: $${cart[i].price}`)

    modalContent3.appendChild(pElementName);
    pElementName.appendChild( pTextNodeName);

    modalContent3.appendChild(pElementPrice);
    pElementPrice.appendChild( pTextNodePrice);

    modalContent3.appendChild(linebreak);
    };
};




// Get the modal
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modalContent = document.getElementById("cartContent");
let modalContent2 = document.getElementById("modal2Content");
let modalContent3 = document.getElementById("modal3Content");


// Get the button that opens the modal
let btn = document.getElementById("checkoutButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//Create button that opens modal3
let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit Payment"

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
modal3Closer.onclick = function() {
    modal3.style.display = "none";
    modal3Content.innerHTML = '';
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
  if (event.target == modal3) {
      modal3.style.display = "none";
      modal3Content.innerHTML = '';
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

submitBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
    modalContent.innerHTML = '';
    modal3.style.display = "block";
})

let cashOption = document.getElementById("cash");
let creditOption = document.getElementById("credit");


modal.addEventListener("click", function (e) {
    if (cashOption === e.target) {
        modalContent.innerHTML = '';
        let cashContainer = document.createElement("div");
        let clientCash = document.createElement("input");
        clientCash.setAttribute("type", "text");
        clientCash.setAttribute("id", "clientCash");
        let inputRequest = document.createElement("p");
        inputRequest.innerHTML= `Please enter the amount you would like to apply toward your total: $${total}`;
     
        modalContent.appendChild(cashContainer);
        cashContainer.appendChild(inputRequest);
        cashContainer.appendChild(clientCash);
        
        modalContent.appendChild(submitBtn);
        submitBtn.addEventListener("click", function(){
            cashValue = parseInt(clientCash.value);
            console.log(cashValue);
            receiptSubtotal.innerHTML = `Subtotal: $${displayTotal}`;
            receiptTax.innerHTML = `Sales Tax: $${salesTax}`;
            receiptTotal.innerHTML = `Grand Total: $${total}`;
            amountApplied.innerHTML = `You Paid: $${cashValue}`;
            let clientChange = (cashValue - total).toFixed(2);
            receiptChange.innerHTML = `Your Change is $${clientChange}`;
        });
        submitBtn.addEventListener("click", receiptItemizedCart);

    }
    if (creditOption === e.target) {
        modalContent.innerHTML = '';
        let creditContainer = document.createElement("div");
        let creditCardIcons = document.createElement("img");
        let clientCardNumber = document.createElement("input");
        let clientCardExpirationDate = document.createElement("input");
        let clientCardCVV = document.createElement("input");
        let linebreak = document.createElement("br");
        let linebreak2 = document.createElement("br");
        let linebreak3 = document.createElement("br");

        creditCardIcons.src = "img/creditCards.png";
        creditCardIcons.style.maxHeight = "100px";
        creditCardIcons.style.maxWidth = "400px";

        clientCardNumber.setAttribute("type", "text");
        clientCardExpirationDate.setAttribute("type", "text");
        clientCardCVV.setAttribute("type", "text");
        clientCardNumber.setAttribute ("placeholder", "Card Number");
        clientCardExpirationDate.setAttribute("placeholder", "Expiration Date");
        clientCardCVV.setAttribute("placeholder", "CVV")
     
        modalContent.appendChild(creditContainer);
        creditContainer.appendChild(creditCardIcons);
        creditContainer.appendChild(linebreak3);
        creditContainer.appendChild(clientCardNumber);
        creditContainer.appendChild(linebreak);
        creditContainer.appendChild(clientCardExpirationDate);
        creditContainer.appendChild(linebreak2);
        creditContainer.appendChild(clientCardCVV);

        modalContent.appendChild(submitBtn);
        submitBtn.addEventListener("click", receiptItemizedCart);
        receiptSubtotal.innerHTML = `Subtotal: $${displayTotal}`;
        receiptTax.innerHTML = `Sales Tax: $${salesTax}`;
        receiptTotal.innerHTML = `Grand Total: $${total}`;
        amountApplied.innerHTML = `You Paid: $${total}`;
        receiptChange.innerHTML = `Your Change is $0`;
    }
}); 
