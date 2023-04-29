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
  
  getJSON('../JSON/izdvajamo.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getJSON('../JSON/obavestenja.json');
  }).then(data => {
    console.log('promise 2 resolved:', data);
    return getJSON('../JSON/pitanja.json');
  }).then(data => {
    console.log('promise 3 resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });


  if(window.location.href.includes('sva-pitanja-i-odgovori')){
    
  } else if (window.location.href.includes('Pitanja-i-odgovori')) {

  } else if (window.location.href.includes('index')){
    
  }