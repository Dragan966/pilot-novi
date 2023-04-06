const hamburgerIconDIV = document.querySelector('.hamburgerIcon');
const hamburgerIcon = document.querySelector('.hamburgerIcon > img');
const navigation = document.querySelector('nav > .container > ul');
const body = document.querySelector('body');
const subMenu = document.querySelectorAll('.expand');

hamburgerIcon.addEventListener('click', mobileMenu);

function mobileMenu() {
    if(navigation.style.left !== '0%') {
        navigation.style.left = '0%';
        hamburgerIcon.src = 'SLIKE/close_FILL0_wght400_GRAD0_opsz48.svg';
        navigation.style.overflow = 'scroll';
        body.style.overflow = 'hidden';

        subMenu.forEach(sub => {
            sub.classList.remove('shown');
        });
    } else {
        navigation.style.left = '-110%';
        hamburgerIcon.src = 'SLIKE/menu_FILL0_wght700_GRAD200_opsz48.svg';
        navigation.style.overflow = 'hidden';
        body.style.overflow = 'scroll';
    }
    
}


  
if (window.innerWidth < 1024) {
    // OVDE JE PROBLEM -> JER REAGUJE I NA KONTAKT I SL (sve sto nema dropmenu) 
    const expandBtn = document.querySelectorAll('h2, h3');
    console.log(expandBtn);

    expandBtn.forEach(exp => {
        exp.addEventListener('click', () => {
            exp.nextElementSibling.classList.toggle('shown');
        });
    });
} 
  