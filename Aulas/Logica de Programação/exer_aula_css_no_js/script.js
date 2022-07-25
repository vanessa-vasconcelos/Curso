const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');



for (let p of ps) {
   p.style.backgroundColor = 'rgb(17, 86, 102)'
   p.style.color = 'rgb(255, 255, 255)'
}


// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

// for (let p of ps) {
//    p.style.backgroundColor = backgroundColorBody
//    p.style.color = 'rgb(255, 255, 255)'
// }