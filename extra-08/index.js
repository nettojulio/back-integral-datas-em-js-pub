a(new Date());
b(new Date());
c(new Date());
d(new Date());
e(new Date());
f(new Date());

function datas(data) {
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    const meses = [
        {
            numerico: 1,
            extenso: 'janeiro'
        },
        {
            numerico: 2,
            extenso: 'fevereiro'
        },
        {
            numerico: 3,
            extenso: 'marco'
        },
        {
            numerico: 4,
            extenso: 'abril'
        },
        {
            numerico: 5,
            extenso: 'maio'
        },
        {
            numerico: 6,
            extenso: 'junho'
        },
        {
            numerico: 7,
            extenso: 'julho'
        },
        {
            numerico: 8,
            extenso: 'agosto'
        },
        {
            numerico: 9,
            extenso: 'setembro'
        },
        {
            numerico: 10,
            extenso: 'outubro'
        },
        {
            numerico: 11,
            extenso: 'novembro'
        },
        {
            numerico: 12,
            extenso: 'dezembro'
        }
    ];

    let mesExtenso = '';

    for (const mesProcurado of meses) {
        if (mesProcurado.numerico === mes) {
            mesExtenso = mesProcurado.extenso;
        }
    }

    const retorno = { dia, mes, mesExtenso, ano };
    return retorno;
}

function a(data) {
    const { dia, mesExtenso, ano } = datas(data);
    console.log(`a) ${dia.toString().padStart(2, '0')} de ${mesExtenso} de ${ano}`);
}

function b(data) {
    const { dia, mes, ano } = datas(data);
    console.log(`b) ${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`);
}

function c(data) {
    const { dia, mesExtenso } = datas(data);
    console.log(`c) ${dia} ${mesExtenso.substr(0, 3)}`);
}

function d(data) {
    const { dia, mesExtenso, ano } = datas(data);
    console.log(`d) ${dia.toString().padStart(2, '0')} ${mesExtenso.substr(0, 3)} ${ano}`);
}

function e(data) {
    const { dia, mesExtenso, ano } = datas(data);
    console.log(`e) ${dia.toString().padStart(2, '0')} de ${mesExtenso.substr(0, 3)} de ${ano}`);
}

function f(data) {
    const { dia, mesExtenso } = datas(data);
    console.log(`f) ${dia.toString().padStart(2, '0')}/${mesExtenso.substr(0, 3)}`);
}