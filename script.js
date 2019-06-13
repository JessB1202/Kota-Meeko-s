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

const dryProduct = document.querySelectorAll(".food-logo");
const dryPop = document.querySelectorAll(".popup");

foodCategory.addEventListener("click", function(e){
    for (let index = 0; index < dryProduct.length; index++) {
        if (dryProduct[index] === e.target) {
            
            // dryProduct[index].src = "";
            // dryProduct[index].alt = "";
            // e.target.style.display = dryPop[index];
            dryPop[index].style.display = "block";
            console.log(dryProduct[index]);
            console.log(e.target);
        }
    }

})

let numberOfItemsInCart = document.getElementById("itemsInCart");
let displayTotal = document.getElementById("displayTotal");

numberOfItemsInCart.innerHTML = `Number Of Items ${cart.length}`;
displayTotal.innerHTML = `Total $TBD`;
