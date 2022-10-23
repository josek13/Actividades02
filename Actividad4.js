function numImPares(x) {
    let cont = 1;
    while (cont <= x) {
        if (cont % 2 != 0) {
            console.log(cont + '<br>');
        }
        cont++;
    }
}

numImPares(50);