const hamburgerIconDIV = document.querySelector('.hamburgerIcon');
const hamburgerIcon = document.querySelector('.hamburgerIcon > img');
const navigation = document.querySelector('nav > .container > ul');

hamburgerIcon.addEventListener('click', mobileMenu);

function mobileMenu() {
    if(navigation.style.left !== '0%') {
        navigation.style.left = '0%';
        hamburgerIcon.src = 'SLIKE/close_FILL0_wght400_GRAD0_opsz48.svg';
    } else {
        navigation.style.left = '-110%';
        hamburgerIcon.src = 'SLIKE/menu_FILL0_wght700_GRAD200_opsz48.svg';
    }
    
}