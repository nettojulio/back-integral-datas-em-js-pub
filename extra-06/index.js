function taValendoAPromocao (inicio, solicitado) {
    let validade = false

    if (+solicitado < +inicio) {
        console.log('Aguarde inicio da promoção');
    } else {
        if ((+solicitado - +inicio) < 86400000) {
            validade = true;
        }
    }
    console.log(validade);
}

taValendoAPromocao(new Date(2021, 7, 6, 21, 10), new Date(2021, 7, 5, 21, 10));