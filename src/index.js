const dropdownMenu = document.querySelector(".dropdownMenu");
const values = document.querySelector(".values");
console.log(dropdownMenu);

dropdownMenu.onclick = function(){

    if (values.style.visibility === "visible"){
        values.style.visibility = "hidden";
    }else{
        values.style.visibility = "visible";
        values.style.opacity = 1;
    }
    
}