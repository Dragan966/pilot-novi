const statsCircle = document.querySelectorAll('.statsCircle .stat');
const h1 = document.querySelector('.statsCircle h1');
const para = document.querySelector('.statsCircle p');
let interval;
let i = 0;

const stats = [
    {
        number: 1,
        text: 'Prva tekst neki ssdas',
    },
    {
        number: 2,
        text: 'Druga tekst neki ssdas',
    },
    {
        number: 3,
        text: 'Treca tekst neki ssdas',
    },
    {
        number: 4,
        text: 'Cetvrta tekst neki ssdas',
    },
    {
        number: 5,
        text: 'Peta tekst neki ssdas',
    },
    {
        number: 6,
        text: 'Sesta tekst neki ssdas',
    },
    {
        number: 7,
        text: 'Sedma tekst neki ssdas',
    },
    {
        number: 8,
        text: 'Osma tekst neki ssdas',
    },
];


function changeDot() {
    if (!interval) {
      interval = setInterval(linksOrg, 4500);
    }
}
  
function stopDot() {
    clearInterval(interval);
    interval = null;
}

