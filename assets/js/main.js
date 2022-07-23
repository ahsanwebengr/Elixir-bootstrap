// Navar icon change 

const navbarToggler = document.querySelector('.navbar-toggler');
const icon = document.querySelector('#icon');

navbarToggler.addEventListener("click", ()=> {
  icon.classList.toggle('fa-times')
})

//Navbar Hide
let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLink.forEach((a)=>{
    a.addEventListener("click", ()=>{
        navCollapse.classList.remove("show");
    })
});


// Active Counter 

const download = document.querySelector('#Download');

let count = 1;

setInterval(() => {
  if(count < 1900){
    count++;
    download.innerHTML = count;
}
}, 1);

const client = document.querySelector('#Client');

let count1 = 1;

setInterval(() => {
  if(count1 < 2800){
    count1++;
    client.innerHTML = count1;
}
}, 1);

const design = document.querySelector('#Design');

let count2 = 1;

setInterval(() => {
  if(count2 < 2900){
    count2++;
    design.innerHTML = count2;
}
}, 1);

const tMember = document.querySelector('#Tmember');

let count3 = 1;

setInterval(() => {
  if(count3 < 100){
    count3++;
    Tmember.innerHTML = count3;
}
}, 1);

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});