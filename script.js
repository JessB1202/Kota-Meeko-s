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