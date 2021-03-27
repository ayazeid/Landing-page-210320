/**
 * 
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// store all sections into a variable
const contents= document.querySelectorAll("section[data-nav]");

const navbarMenu = document.querySelector("#navbar__list");

const main= document.querySelector("main");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// create an anchor element inside li element and apend them to ul element 
const navMenufunction = function(){
  for (const content of contents){
  const contentTitle=content.querySelector("h2").innerText;
  const sectionPort="#"+(content.id);
 const anchorEl= document.createElement("a");

 //set href attribute to scroll to section on click
 anchorEl.setAttribute("href",sectionPort);
 anchorEl.className= "menu__link";
 anchorEl.textContent= contentTitle;


 const listEl = document.createElement("li");
const listItem=listEl.appendChild(anchorEl);
navbarMenu.appendChild(listItem);
}}
navMenufunction();



// hide or show navbar function
const visiblity=function(){
  document.querySelector("header").classList.add("visible");
setTimeout(function(){document.querySelector("header").classList.remove("visible");},10000);

}





// Add class 'active' to section when near top of viewport
const viewportFunc =function(){
  for (const content of contents){
    const navLinks=document.querySelectorAll("a");
    content.classList.remove("your-active-class");
    

    //measure the viewport coordinations
  if(content.getBoundingClientRect().top >=-229 && content.getBoundingClientRect().top <= 400){
    content.classList.add("your-active-class");

    //synchronize section link active state with section viewport
for(const navLink of navLinks){
  if(navLink.innerText == content.getAttribute("data-nav")){
    navLink.classList.add("active");
  }else{navLink.classList.remove("active");}
}
  }else{content.classList.remove("your-active-class");}
  }}


  








//Scroll to sections from anchors in navigation menu
const anchors= document.querySelectorAll("a");
for (const anchor of anchors){
  const sectionPort= anchor.getAttribute("href");
    const section=document.querySelector(sectionPort);
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    
    section.scrollIntoView({behavior: "smooth"});
  });
}





  

//scroll to top button
const button=document.createElement("button");
button.textContent="Top";
button.className="topUpBtn";
main.appendChild(button);
const scrollTop= function (){
  window.scrollTo(0,0);
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("scroll", visiblity );

// Set sections as active
window.addEventListener("scroll", viewportFunc);

//Go to the top button
button.addEventListener("click", scrollTop);