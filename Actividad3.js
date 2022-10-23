function numPares(x) {
    let cont = 2;
    while (cont <= x) {
        if (cont % 2 == 0) {
            console.log(cont + '<br>');
        }
        cont++;
    }
}

numPares(50);