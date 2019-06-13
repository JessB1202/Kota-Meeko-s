const cart = [];
const foodCategory = document.getElementById("foodCategory");
const toysCategory = document.getElementById("toysCategory");
const cleaningCategory = document.getElementById("cleaningCategory");
const accessoriesCategory = document.getElementById("accessoriesCategory");

const foodLink = document.getElementById("foodLink");
const toysLink = document.getElementById("toysLink");
const cleaningLink = document.getElementById("cleaningLink");
const accessoriesLink = document.getElementById("accessoriesLink");

foodLink.addEventListener('click', function(){
    window.scrollTo(0,0);
});

toysLink.addEventListener('click', function(){
    toysCategory.scrollIntoView();
});

cleaningLink.addEventListener('click', function(){
    cleaningCategory.scrollIntoView();
});

accessoriesLink.addEventListener('click', function(){
    accessoriesCategory.scrollIntoView();

});

const productImage = document.querySelectorAll(".logo");
const productDescription = document.querySelectorAll(".popup");

document.addEventListener("mouseover", function(e){
    for (let index = 0; index < productImage.length; index++) {
        if (productImage[index] === e.target) {
            productDescription[index].style.display = "block";
            break;
        }
    }
})

document.addEventListener("mouseout", function(e){
    for (let index = 0; index < productImage.length; index++) {
        if (productImage[index] === e.target) {
            productDescription[index].style.display = "none";
            break;
        }
    }
})

let numberOfItemsInCart = document.getElementById("itemsInCart");
let displayTotal = document.getElementById("displayTotal");

numberOfItemsInCart.innerHTML = `Number Of Items ${cart.length}`;
displayTotal.innerHTML = `Total $TBD`;
