const burgerMenu = document.querySelector('#mobile-menu'); // this targets athe #mobile-menu id from div in the HTML page
const menuLinks = document.querySelector('.navbar__menu');// this targets athe .navbar__menu class id from div in the HTML page
const navLogo = document.querySelector('#navbar__logo');
const flipCard = document.querySelector('.services__card');

// Display Mobile Menu
const mobileMenu = () => {
    burgerMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

burgerMenu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servMenu = document.querySelector('#serv-page');
    const contactMenu = document.querySelector('#contact-page');
    
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // console.log(scrollPos);

    // adds 'hightight' class to my menu items
    // this 'if' statement hjas this function work only in desktop. 767 is to catch the
    // mobile users. we've been using 767 as a breakpoint this whole time
    if (window.innerWidth > 767 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 767 && scrollPos < 1300) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 767 && scrollPos < 1900) {
        servMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 767 && scrollPos < 2800) {
        contactMenu.classList.add('highlight');
        servMenu.classList.remove('highlight');
        return;
    }
    else if ((elem && window.innerWidth < 767 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        burgerMenu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Services Section, jolds card in place until clicked again (NOT WORKING)
