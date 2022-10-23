function contarCartas(card) {
    // Variable que guarda el valor
    var count = 0;

    // Segun el valor recibido se aumenta o diminuye la variable 'count'
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break
    }

    // Devuelve si debe apostar o no
    if (count > 0) {
        return console.log(count + ' Bet');
    } else {
        return console.log(count + ' Hold');
    }
}

contarCartas(3);
contarCartas('J');