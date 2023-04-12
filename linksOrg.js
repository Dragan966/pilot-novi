const bigPhoto = document.querySelector('.linksOrg .bigOne .bigphoto');
const bigInfoh1 = document.querySelector('.linksOrg .bigOne .info h1');
const bigInfoP = document.querySelector('.linksOrg .bigOne .info p');
const small = document.querySelectorAll('.linksOrg .smallOne .small');


const allLinks = [
    {
        name: 'Prva',
        text: 'Prva tekst neki ssdas',
        photo: 'SLIKE/1.webp',
        link: '#prvi',
    },
    {
        name: 'Druga',
        text: 'Druga tekst neki ssdas',
        photo: 'SLIKE/2.webp',
        link: '#drugi',
    },
    {
        name: 'Treca',
        text: 'Treca tekst neki ssdas',
        photo: 'SLIKE/3.webp',
        link: '#treci',
    },
    {
        name: 'Cetvrta',
        text: 'Cetvrta tekst neki ssdas',
        photo: 'SLIKE/4.webp',
        link: '#cetvrti',
    },
    
];

function goBig (i) {
    bigPhoto.style.backgroundImage = `url('${allLinks[i].photo}')`;
    bigInfoh1.innerHTML = allLinks[i].name;
    bigInfoP.innerHTML = allLinks[i].text;
    bigPhoto.parentElement.setAttribute('href', `${allLinks[i].link}`);
}