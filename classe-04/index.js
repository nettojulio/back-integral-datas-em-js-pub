function taAberto(entrada) {
    let acesso = true;

    if (entrada.getHours() >= 18 && entrada.getMinutes() > 0 || entrada.getHours() < 8 || entrada.getDay() === 6 || entrada.getDay() === 0) {
        acesso = false;
    }
    console.log(acesso)
}

taAberto(new Date(2021,3,25,12));
taAberto(new Date(2021,3,26,12));
taAberto(new Date(2021,3,26,7,59));
