// const getJSON = (resource) => {

//     return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();
  
//       request.addEventListener('readystatechange', () => {
    
//         if(request.readyState === 4 && request.status === 200){
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else if (request.readyState === 4){
//           reject('error-request-status: '+ request + request.status);
//         }
    
//       });
      
//       request.open('GET', resource);
//       request.send();
//     });
  
//   };
  
//   getJSON('../JSON/izdvajamo.json').then(data => {
//     console.log('promise 1 resolved:', data);
//     return getJSON('../JSON/obavestenja.json');
//   }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getJSON('../JSON/pitanja.json');
//   }).then(data => {
//     console.log('promise 3 resolved:', data);
//   }).catch(err => {
//     console.log('promise rejected:', err);
//   });


//   if(window.location.href.includes('sva-pitanja-i-odgovori')){
    
//   } else if (window.location.href.includes('Pitanja-i-odgovori')) {

//   } else if (window.location.href.includes('index')){
    
//   }

const getJSON = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4){
        reject('error-request-status: '+ request + request.status);
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  });

};



const currentPathName = window.location.pathname;
// const currentPathNameArray = currentPathName.substring(1).split('/');
// console.log(currentPathNameArray);


if(currentPathName.includes('index')){



} else if(currentPathName.includes('sva-obavestenja')){

  // showJSONbyId('id', 'obavestenja.json', 'obavestenja');

} else if(currentPathName.includes('sva-pitanja-i-odgovori')){
  //ovo je OK
  showJSONbyId('id', 'pitanja.json', 'pitanje');

} else if(currentPathName.includes('Pitanja-i-odgovori')){

  // showJSONbyId('grupa', 'izdvajamo.json', 'izdvajamo');

} else if(currentPathName.includes('izdvajamo')){

  // showJSONbyId('id', 'izdvajamo.json', 'izdvajamo');

} else if(currentPathName.includes('search-stranica')){
  //stranice jos nema
  //treba da se proveri ako nema dodatak sta onda


}








// getJSON('../JSON/pitanja.json').then(data => {
//       console.log('promise 1 resolved:', data);
//       data.forEach(obj => onePost(obj, '-pitanje'));
//     }).catch(err => {
//       console.log('promise rejected:', err);
//     });


function onePost(obj, type) {
  const jsonContainer = document.querySelector('.jsonContainer');

  //div.objavaJSON
  const post = document.createElement('div');
  post.classList.add('objavaJSON' + type);

  //div.naslovJSON
  const naslov = document.createElement('div');
  naslov.classList.add('naslovJSON' + type);
  const h1 = document.createElement('h1');
  h1.textContent = obj.naslov;
  naslov.appendChild(h1);
  post.appendChild(naslov);

  if(obj.slika) {
    //div.slikaJSON
    const slika = document.createElement('div');
    slika.classList.add('slikaJSON' + type);
    const img = document.createElement('img');
    img.setAttribute('src', obj.slika);
    slika.appendChild(img);
    post.appendChild(slika);
  }

  //div.tekstJSON
  const tekst = document.createElement('div');
  tekst.classList.add('tekstJSON' + type);
  obj.tekst.forEach(t => {
    const para = document.createElement('p');
    para.textContent = t;
    tekst.appendChild(para);
  });
 
  //div.datumJSON
  const datum = document.createElement('div');
  datum.classList.add('datumJSON' + type);
  const para = document.createElement('p');
  para.textContent = obj.datum;
  datum.appendChild(para);
  tekst.appendChild(datum);

  post.appendChild(tekst);
  jsonContainer.appendChild(post);
}


function queryParameters(parameter) {
  const urlParams = new URLSearchParams(window.location.search);
  const par = urlParams.get(parameter);

  if(!par) {
    return undefined;
  }
  return par;
}


function linkPrefix() {
  const currentPathName = window.location.pathname;
  const currentPathNameArray = currentPathName.substring(1).split('/');

  let pom = '';

  for(let i = 1; i < currentPathNameArray.length; i++) {
    pom += '../'
  }

  return pom;
}


function showJSONbyId(key, jsonFile, type) {
  const query = queryParameters(key);

  getJSON(linkPrefix() + 'JSON/' + jsonFile).then(data => {
    console.log('promise 1 resolved:', data);
    
    const res = data.filter( d => d[key] == query);

    if(res.length) {
      res.forEach(r => onePost(r, '-' + type))
    } else {
      data.forEach(obj => onePost(obj, '-' + type));
    }

  }).catch(err => {
    console.log('promise rejected:', err);
  });

}