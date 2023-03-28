const primeiraResposta = document.querySelector('.resposta__um');
const segundaResposta = document.querySelector('.resposta__dois');
const terceiraResposta = document.querySelector('.resposta__tres');
const quartaResposta = document.querySelector('.resposta__quatro');
const quintaResposta = document.querySelector('.resposta__cinco');

const dados = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

const calculaPrimeiroExercicio = () => {

    const indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k++;
        soma += k;
    }

    primeiraResposta.innerText = `exercício 1: ${soma}`;
    console.log(soma);
}
//exercício 2

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
        segundaResposta.innerText = `exercício 2: o número ${numeroDesejado} pertence a sequencia.`
        console.log('pertence')

    } else {
        segundaResposta.innerText = `exercício 2: o número ${numeroDesejado} não pertence a sequencia.`
        console.log('não pertence')
    }
}

//exercício 3
const calculaFaturamento = () => {

    const valores = dados.map(dado => dado.valor)

    let menorValor = valores[0];
    let maiorValor = 0;
    let somaValores = 0;
    let valoresValidos = 0;
    let valorSuperiorAMedia = 0;

    valores.forEach(valor => {

        if (valor != 0) {
            somaValores += valor;
            valoresValidos++;
            if (valor < menorValor) {
                menorValor = valor;
            } else if (valor > maiorValor) {
                maiorValor = valor;
            }
        }
    })

    let mediaMensal = somaValores / valoresValidos;

    valores.forEach(valor => {
        if (valor > mediaMensal) {
            valorSuperiorAMedia++;
        }
    })

    terceiraResposta.innerText = `exercício 3: o menor valor é: ${menorValor}. o maior valor é: ${maiorValor}. Em ${valorSuperiorAMedia} dias o valor do faturamento diário foi superior à média mensal.`;

    console.log('menor: ' + menorValor, 'maior: ' + maiorValor);
    console.log('valores superior a media mensal ' + valorSuperiorAMedia);
}




calculaPrimeiroExercicio();

calculaFibonacci();

calculaFaturamento();