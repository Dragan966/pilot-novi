const karticaUstanove = [
    {
        naziv: ['Arilje', 'Ариље'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Arilje.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Arilje.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Arilje.html'],
        Dom: undefined,
    },
    {
        naziv: ['Bajina', 'Бајина Башта'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Bajina-Basta.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Bajina-Basta.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Bajina-Basta.html'],
        Dom: undefined,
    },
    {
        naziv: ['Cajetina', 'Чајетина'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Cajetina.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Cajetina.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Cajetina.html'],
        Dom: undefined,
    },
    {
        naziv: ['Kosjeric', 'Косјерић'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Kosjeric.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Kosjeric.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Kosjeric.html'],
        Dom: undefined,
    },
    {
        naziv: ['Varos', 'Нова Варош'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Nova-Varos.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Nova-Varos.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Nova-Varos.html'],
        Dom: undefined,
    },
    {
        naziv: ['Pozega', 'Пожега'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Pozega.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Pozega.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Pozega.html'],
        Dom: ['Пољопривредна школа са домом ученика "Љубо Мићић" Пожега', '../../Ustanove/Domovi-ucenika/Ljubo-Micic-Pozega.html'],
    },
    {
        naziv: ['Priboj', 'Прибој'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Priboj.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Priboj.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Priboj.html'],
        Dom: undefined,
    },
    {
        naziv: ['Prijepolje', 'Пријепоље'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Prijepolje.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Prijepolje.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Prijepolje.html'],
        Dom: undefined,
    },
    {
        naziv: ['Sjenica', 'Сјеница'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Sjenica.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Sjenica.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Sjenica.html'],
        Dom: undefined,
    },
    {
        naziv: ['Uzice', 'Ужице'],
        Predskolske: ['Предшколске установе', '../../Ustanove/Predskolske-ustanove/Uzice.html'],
        Osnovne: ['Основне школе', '../../Ustanove/Osnovne-skole/Uzice.html'],
        Srednje: ['Средње школе', '../../Ustanove/Srednje-skole/Uzice.html'],
        Dom: ['Дом ученика средњих школа Ужице', '../../Ustanove/Domovi-ucenika/Dom-ucenika-srednjih-skola-Uzice.html'],
    }
];


const miniMaph3 = document.querySelector('.miniMap > h3');
const miniMapul = document.querySelector('.miniMap > ul');

const currentURL = window.location.href;
console.log(currentURL);

if(currentURL.includes('Ustanove')) {
    karticaUstanove.forEach(opsitnaInfo => {
        if(currentURL.includes(opsitnaInfo.naziv[0])){
            for (const key in opsitnaInfo) {
                if (currentURL.includes(key)) {
                    addingLi(opsitnaInfo[key][0], '#', 1);
                } else if(key === 'naziv'){
                    miniMaph3.innerHTML = opsitnaInfo[key][1];
                } else if(opsitnaInfo[key]){
                    addingLi(opsitnaInfo[key][0], opsitnaInfo[key][1]);
                }
            }
        }
    })
}

function addingLi(text, url, underline = 0) {
    let textNode = document.createTextNode(text);
    let anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.appendChild(textNode);
    if(underline) {
        anchorElement.style.textDecoration = 'underline';
        anchorElement.style.textDecorationColor = '#c7363d';
    }
    let listElement = document.createElement("li");
    listElement.appendChild(anchorElement);
    miniMapul.appendChild(listElement);
}