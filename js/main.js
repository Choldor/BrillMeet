const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-items')
const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navMobile.classList.toggle('nav-items-active');
}

hamburger.addEventListener('click', handleClick);