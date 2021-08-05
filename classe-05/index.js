function taAberto(entrada) {
    let acesso = true;

    if (entrada.getDay() !== 0) {
        if (entrada.getDay() !== 6) {
            if (entrada.getHours() >= 18 && entrada.getMinutes() > 0 || entrada.getHours() < 8) {
                acesso = false
            }
        } else {
            if (entrada.getHours() >= 12 && entrada.getMinutes() > 0 || entrada.getHours() < 8) {
                acesso = false;
            }
        }
    } else {
        acesso = false;
    }
    console.log(acesso)
}

taAberto(new Date(2021, 3, 25, 12));
taAberto(new Date(2021, 3, 26, 12));
taAberto(new Date(2021, 3, 26, 7, 59));
taAberto(new Date(2021, 3, 24, 9, 30));