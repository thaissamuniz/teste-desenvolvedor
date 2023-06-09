const primeiraResposta = document.querySelector('.resposta__um');
const segundaResposta = document.querySelector('.resposta__dois');
const terceiraResposta = document.querySelector('.resposta__tres');
const quartaResposta = document.querySelector('.resposta__quatro');
const quintaResposta = document.querySelector('.resposta__cinco');
const respostaUsuario = document.querySelector('.exericio__dois');
const btnExercicioDois = document.querySelector('.exericio__dois--btn');
const respostaUsuarioCinco = document.querySelector('.exericio__cinco');
const btnExercicioCinco = document.querySelector('.exericio__cinco--btn');

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

    const numeroDesejado = parseInt(respostaUsuario.value);
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


//exercicio 4
const calculaPorcentagem = () => {

    const estadosEValores = [
        { estado: 'SP', valor: '67.836,43' },
        { estado: 'RJ', valor: '36.678,66' },
        { estado: 'MG', valor: '29.229,88' },
        { estado: 'ES', valor: '27.165,48' },
        { estado: 'outros', valor: '19.849,53' }
    ];

    const valoresSemPonto = estadosEValores.map(estado => estado.valor.replace('.', ''));

    const valoresFormatados = valoresSemPonto.map(estado => estado.replace(',', '.'));

    const valoresFloat = valoresFormatados.map(valor => parseFloat(valor))

    let valorTotalMensal = 0;

    valoresFloat.forEach(valor => valorTotalMensal += valor);

    valoresFloat.forEach((valor, i) => {
        const percentual = Math.round((valor / valorTotalMensal) * 100)

        quartaResposta.innerText += `${estadosEValores[i].estado} representa ${percentual}% - `
        console.log(estadosEValores[i].estado + ' representa ' + percentual + '%')
    })
}

//exercicio 5
const convertePalavra = () => {

    let palavra = respostaUsuarioCinco.value;
    let palavraInvertida = '';

    for (i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]
    }

    quintaResposta.innerText = `exercício 5: a palavra ${palavra} invertida é ${palavraInvertida}`;
    console.log(palavraInvertida);
}

calculaPrimeiroExercicio();

btnExercicioDois.addEventListener('click', e => {
    e.preventDefault();
    calculaFibonacci();
    respostaUsuario.value = '';
});

calculaFaturamento();

calculaPorcentagem();

// convertePalavra();

btnExercicioCinco.addEventListener('click', e => {
    e.preventDefault();
    convertePalavra();
    respostaUsuarioCinco.value = '';
});


