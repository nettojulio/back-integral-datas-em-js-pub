function taValendoAPromocao (inicio, solicitado) {
    let validade = false

    if (+solicitado < +inicio) {
        console.log('Aguarde inicio da promoção');
    } else {
        if ((+solicitado - +inicio) < 2592000000) {
            validade = true;
        }
    }
    console.log(validade);
}

taValendoAPromocao(new Date(2021, 7, 5, 21, 10), new Date(2021, 8, 4, 21, 10));