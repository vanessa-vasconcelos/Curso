function ValidaCpf(cpfEnviado) {
    let cpfLimpo = cpfEnviado.replace(/\D+/g, '');// tudo que não for numero, subtitua
}

const cpf = new ValidaCpf('705.484.450-52');
cpf.valida();

console.log(cpfLimpo);