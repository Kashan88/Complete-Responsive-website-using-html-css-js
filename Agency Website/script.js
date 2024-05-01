let toggle_menu = document.querySelector(".toggler");
let mobile_menu = document.querySelector(".mobile-menu");

toggle_menu.onclick = function(){
    if(mobile_menu.style.display === "none"){
        mobile_menu.style.display = "flex"
    }
    else{
        mobile_menu.style.display = "none"
    }
}