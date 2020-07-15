
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-items');
const nav = document.querySelector('nav');
const logoSection = document.querySelector('.logo-section');
const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navMobile.classList.toggle('nav-items-active');
}

hamburger.addEventListener('click', handleClick);



window.addEventListener('scroll', function() {
   
    if (window.scrollY > 100 && window.innerWidth > 992){
    nav.style.background = "#524496";
    }
    
    else {nav.style.background = "transparent";}
    
   });

    let perViewCount = 1;
    if (window.innerWidth < 992) {
       perViewCount = 1;
    }
    else {
       perViewCount = 4;
    }
    
    new Glide('.glide', {
       type: 'slider',
       startAt: 0,
       perView: perViewCount,
       gap: 10,
     }).mount()
   

   const mobileNavChange = () => {
      if (window.scrollY > 100 && window.innerWidth < 992){
         logoSection.classList.add('logo-section-mobile')
      }
      else{
         logoSection.classList.remove('logo-section-mobile')
      }
   }
   window.addEventListener('scroll', mobileNavChange)