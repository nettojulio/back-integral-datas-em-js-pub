function taAberto(entrada) {
    let acesso = true;

    if (entrada.getHours() >= 18 && entrada.getMinutes() > 0 || entrada.getHours() < 8) {
        acesso = false;
    }
    console.log(acesso)
}

taAberto(new Date(2015,1,1,12));
taAberto(new Date(2015,1,1,2));