function contarBilletes(x) {
    // Aqui definimos variables para cada billete
    var $500 = 0;
    var $200 = 0;
    var $100 = 0;
    var $50 = 0;
    var $20 = 0;
    var $10 = 0;
    var $2 = 0;
    var $1 = 0;

    // En este switch mostramos la cantidad de cada billete, asegurandonos de que siempre sea un numero entero
    switch (x) {
        case x >= 500:
            $500 = Math.trunc(x / 500);
            $200 = Math.trunc(x / 200);
            $100 = Math.trunc(x / 100);
            $50 = Math.trunc(x / 50);
            $20 = Math.trunc(x / 20);
            $10 = Math.trunc(x / 10);
            $2 = Math.trunc(x / 2);
            $1 = x;
            break;
        case x < 500 && x >= 200:
            parseInt($200) = x / 200;
            parseInt($100) = x / 100;
            parseInt($50) = x / 50;
            parseInt($20) = x / 20;
            parseInt($10) = x / 10;
            parseInt($2) = x / 2;
            $1 = x;
            break;
        case x < 200 && x >= 100:
            parseInt($100) = x / 100;
            parseInt($50) = x / 50;
            parseInt($20) = x / 20;
            parseInt($10) = x / 10;
            parseInt($2) = x / 2;
            $1 = x;
            break;
        case x < 100 && x >= 50:
            parseInt($50) = x / 50;
            parseInt($20) = x / 20;
            parseInt($10) = x / 10;
            parseInt($2) = x / 2;
            $1 = x;
            break;
        case x < 50 && x >= 20:
            parseInt($20) = x / 20;
            parseInt($10) = x / 10;
            parseInt($2) = x / 2;
            $1 = x;
            break;
        case x < 20 && x >= 10:
            parseInt($10) = x / 10;
            parseInt($2) = x / 2;
            $1 = x;
            break;
        case x < 10:
            parseInt($2) = x / 2;
            $1 = x;
            break;
    }
}

console.log(contarBilletes(1333));