const primeiraResposta = document.querySelector('.resposta__um');

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

calculaPrimeiroExercicio();
