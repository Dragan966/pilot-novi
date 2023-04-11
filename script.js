const hamburgerIconDIV = document.querySelector('.hamburgerIcon');
const hamburgerIcon = document.querySelector('.hamburgerIcon > img');
const navigation = document.querySelector('nav > .container > ul');
const body = document.querySelector('body');
const h3 = document.querySelectorAll('nav > .container > ul > li > ul:has(> li) h3');
const h4 = document.querySelectorAll('nav h4');

// glavna funkcionalnost hamburger menija 
hamburgerIcon.addEventListener('click', mobileMenu);

// prikazivanje/sakrivanje dropDown menija na telefonu
if (window.innerWidth < 1024) {
    h3.forEach(h3 => {
        h3.addEventListener('click', () => { 
            h3.classList.toggle('marker0');
            const ulArr = Array.from(h3.parentNode.parentNode.children);
            const onlyLiArr = ulArr.filter(ul => !ul.classList.contains('desc'));
            onlyLiArr.forEach(li => {
                expand(li);
                li.classList.toggle('marker1');
            });
        });
    });
    
    h4.forEach(h4 => {
        h4.addEventListener('click', () => { 
            const onlyLiArr = Array.from(h4.nextElementSibling.children);
            onlyLiArr.forEach(li => {
                expand(li);
                li.classList.toggle('marker2');
            });
        });
    });

} 




function expand (node) {
    if(window.getComputedStyle(node).display == 'none'){
        node.style.display = 'block';
    } else {
        node.style.display = 'none';
    }
}

function mobileMenu() {
    if(navigation.style.left !== '0%') {
        navigation.style.left = '0%';
        hamburgerIcon.src = 'SLIKE/close_FILL0_wght400_GRAD0_opsz48.svg';
        navigation.style.overflow = 'scroll';
        body.style.overflow = 'hidden';

        const marker1 = document.querySelectorAll('.marker1');
        const marker2 = document.querySelectorAll('.marker2');
        marker1.forEach(marker => {
            expand(marker);
            marker.classList.toggle('marker1');
        });
        marker2.forEach(marker => {
            expand(marker);
            marker.classList.toggle('marker2');
        });
    } else {
        navigation.style.left = '-110%';
        hamburgerIcon.src = 'SLIKE/menu_FILL0_wght700_GRAD200_opsz48.svg';
        navigation.style.overflow = 'hidden';
        body.style.overflow = 'scroll';
    }
    
}
