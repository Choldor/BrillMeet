
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-items');
const nav = document.querySelector('nav');
const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navMobile.classList.toggle('nav-items-active');
}

hamburger.addEventListener('click', handleClick);


const scrollNav = () => {
    if (nav.offsetTop  < 50) {
        nav.classList.add(".nav-background")
    }
    else {
        nav.style.background = "transparent";
}
}
window.addEventListener('scroll', function() {
    if (nav.offsetTop < 30){
    nav.style.background = "red";}
    else {nav.style.background = "transparent";}
    });
