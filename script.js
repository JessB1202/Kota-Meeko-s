const foodCategory = document.getElementById("foodCategory");
const toysCategory = document.getElementById("toysCategory");
const cleaningCategory = document.getElementById("cleaningCategory");

const foodLink = document.getElementById("foodLink");
const toysLink = document.getElementById("toysLink");
const cleaningLink = document.getElementById("cleaningLink");

foodLink.addEventListener('click', function(){
    foodCategory.scrollIntoView();
});

toysLink.addEventListener('click', function(){
    toysCategory.scrollIntoView();
});

cleaningLink.addEventListener('click', function(){
    cleaningCategory.scrollIntoView();
});