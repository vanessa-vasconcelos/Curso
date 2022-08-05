const request = obj => {  // essa função vai buscar as paginas P1,P2,P3
  return new Promise((resolve, reject) => {
    const  xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // true para assicrono
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText); //retorna o texto recebido de um servidor após o envio de uma solicitação.
        }  else {
            reject(xhr.statusText)
        }
    })
  })
    
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href') // retorna o valor de um argumento específico do elemento.
    
    const objConfig = {
        method: 'GET',
        URL: href,
        
    }

    try {
    const response = await request(objConfig);
    carregaResultado(response);
    }catch(e) {
        console.log(e)
    }
    
}

function carregaResultado (response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


// MODO ANTIGO
// const request = obj => {  // essa função vai buscar as paginas P1,P2,P3
//     const  xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true); // true para assicrono
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText); //retorna o texto recebido de um servidor após o envio de uma solicitação.
//         }  else {
//             obj.error(xhr.statusText)
//         }
//     })
// }

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if(tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href') // retorna o valor de um argumento específico do elemento.
    
//     request({
//         method: 'GET',
//         URL: href,
//         success(response) {
//             carregaResultado(response)
//         },
//         error(erroText) {
//             console.log(erroText);
//         }
//     })
// }

// function carregaResultado (response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }