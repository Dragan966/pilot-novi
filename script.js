const hamburgerIconDIV = document.querySelector('.hamburgerIcon');
const hamburgerIcon = document.querySelector('.hamburgerIcon > img');
const navigation = document.querySelector('nav > .container > ul');
const body = document.querySelector('body');
const allExpandElements = document.querySelectorAll('.expand');

// glavna funkcionalnost hamburger menija 
hamburgerIcon.addEventListener('click', mobileMenu);

// prikazivanje/sakrivanje dropDown menija na telefonu
// if (window.innerWidth < 1024) {
//     allExpandElements.forEach(expEl => {
//         const expandBtn = expEl.previousElementSibling;
//         expandBtn.addEventListener('click', () => {
//             expEl.classList.toggle('shown');
//         });
//     });
// } 




function mobileMenu() {
    if(navigation.style.left !== '0%') {
        navigation.style.left = '0%';
        hamburgerIcon.src = 'SLIKE/close_FILL0_wght400_GRAD0_opsz48.svg';
        navigation.style.overflow = 'scroll';
        body.style.overflow = 'hidden';

        allExpandElements.forEach(expEl => {
            expEl.classList.remove('shown');
        });
    } else {
        navigation.style.left = '-110%';
        hamburgerIcon.src = 'SLIKE/menu_FILL0_wght700_GRAD200_opsz48.svg';
        navigation.style.overflow = 'hidden';
        body.style.overflow = 'scroll';
    }
    
}