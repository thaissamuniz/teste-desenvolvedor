const primeiraResposta = document.querySelector('.resposta__um');
const segundaResposta = document.querySelector('.resposta__dois');
const terceiraResposta = document.querySelector('.resposta__tres');
const quartaResposta = document.querySelector('.resposta__quatro');
const quintaResposta = document.querySelector('.resposta__cinco');

const calculaPrimeiroExercicio = () => {

    const indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k++;
        soma += k;
    }

    primeiraResposta.innerText = `a resposta do primeiro exercício é: ${soma}`;
    console.log(soma);
}

const calculaFibonacci = () => {

    const numeroDesejado = parseInt(prompt("informe um número, por favor"));
    const sequencia = [];
    let cont = 1;

    while (cont < 20) {
        sequencia[0] = 0;
        sequencia[1] = 1;

        let soma = sequencia[cont] + sequencia[cont - 1];

        sequencia.push(soma);

        cont++;
    }

    if (sequencia.includes(numeroDesejado)) {
        segundaResposta.innerText = `o número ${numeroDesejado} pertence a sequencia.`
        console.log('pertence')
        
    } else {
        segundaResposta.innerText = `o número ${numeroDesejado} não pertence a sequencia.`
        console.log('não pertence')
    }
}

calculaPrimeiroExercicio();

calculaFibonacci();
