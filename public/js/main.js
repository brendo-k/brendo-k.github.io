const navbar_toggle = document.querySelector(".navbar-button");
const navbar_icon = document.querySelector(".navbar-toggler-icon");
const navbar = document.querySelector('.navbar');
const nav_items = document.querySelector('.navbar-nav');

let showMenu = false;

navbar_toggle.addEventListener('click', toggle_menu);




function toggle_menu(){
  if(!showMenu){
    navbar_icon.classList.add('open');
    navbar.classList.add('open');
    nav_items.classList.add('open');
    showMenu = true;
  } else{
    navbar_icon.classList.remove('open');
    navbar.classList.remove('open');
    nav_items.classList.remove('open');
    showMenu = false;
  }
}

