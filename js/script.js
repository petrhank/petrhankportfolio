const navToggle = document.querySelector('.nav__toggle');
const mainNav = document.querySelector('.nav');
const mainNavAnchors = mainNav.querySelectorAll('a');
const contactAnchor = document.querySelector('a[href="#contact"]');
const skillsItems = document.querySelectorAll('.skills__item');
const contactSection = document.querySelector('#contact');

//Mobilní navigace
function shownav(){
    mainNavAnchors.forEach(function(anchor, i){  
        anchor.style.animationDelay = (i+1) * 200 + 'ms';
    });
    mainNav.classList.add('nav--show');
    mainNav.classList.remove('nav--hide');
};

function hideNav(){
    mainNavAnchors.forEach(function(anchor, i){  
        anchor.style.animationDelay = (mainNavAnchors.length - (i+1)) * 50 + 'ms';
    });
    mainNav.classList.add('nav--hide');
    mainNav.classList.remove('nav--show');
};

navToggle.addEventListener('click', function(){ //Zobrazení a skrytí navbaru v mobilním zobrazení
    (mainNav.classList.contains('nav--show')) ? hideNav() : shownav();
});

mainNavAnchors.forEach(function(anchor){
    anchor.addEventListener('click', function(){
        let media = window.matchMedia('(max-width: 740px');
        if(media.matches){
            hideNav();
        }
    });  
});

//Změna barvy tlačítka nav-toggle
window.addEventListener('scroll', function(){
    (window.pageYOffset > 500) ? navToggle.classList.add('scrolled') : navToggle.classList.remove('scrolled');
}); 

//Pokud bude šířka obrazovky větší, než max-width, tak se při změně velikosti okna odstraní třídy navbaru
window.addEventListener('resize', function(){
    let media = window.matchMedia('(max-width: 740px');
    if(!media.matches){
        mainNav.classList.remove('nav--hide');
        mainNav.classList.remove('nav--show');
    }
});

//Animace otáčení při najetí na skills item
skillsItems.forEach(function(item){
    let playState = false;
    item.addEventListener('mouseover', function(){
        if(playState === false){
            playState = true;
            item.classList.add('rotate-icon');
            let icon = item.querySelector('i');
            let style = getComputedStyle(icon);
            let animationDuration = parseFloat(style.animationDuration)*1000;
            setTimeout(function(){item.classList.remove('rotate-icon'); playState = false},animationDuration);
        }
    });
});

// Animace kontakt vizitky
contactAnchor.addEventListener('click', function(){
    setTimeout(function(){
        contactSection.classList.add('animate__swing');
        let style = getComputedStyle(contactSection);
        let animationDuration = parseFloat(style.animationDuration)*1000;
        setTimeout(function(){
            contactSection.classList.remove('animate__swing');
        }, animationDuration);
    }, 800);
});