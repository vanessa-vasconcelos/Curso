const h1 = document.querySelector('.info_data');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);





// const h1 = document.querySelector('.info_data');
// const data = new Date();

// function dataTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo'
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//     }
    
// }

// function mesTexto(numeroMes) {
//     let mes;

//     switch (numeroMes) {
//         case 0:
//             mes = 'janeiro'
//             return mes;
//         case 1:
//             mes = 'fevereiro';
//             return mes;
//         case 2:
//             mes = 'março';
//             return mes;
//         case 3:
//             mes = 'abril';
//             return mes;
//         case 4:
//             mes = 'maio';
//             return mes;
//         case 5:
//             mes = 'junho';
//             return mes;
//         case 6:
//             mes = 'julho';
//             return mes;
//         case 7:
//             mes = 'agosto';
//             return mes;
//         case 8:
//             mes = 'setembro';
//             return mes;
//         case 9:
//             mes = 'outubro';
//             return mes;
//         case 10:
//             mes = 'novembro';
//             return mes;
//         case 11:
//             mes = 'desembro';
//             return mes;
//     }
    
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = dataTexto(diaSemana);
//     const nomeMes = mesTexto(numeroMes)

//    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` + 
//    `${data.getHours()}:${data.getMinutes()}`
//    );
// }

// h1.innerHTML = criaData(data);