function numeroPatrones(x) {
    // Variables donde guardamos el match con cada patron que le hacemos a el parametro recibido
    let cadena1 = x.match(/00/g);
    let cadena2 = x.match(/101/g);
    let cadena3 = x.match(/abc/gi);
    let cadena4 = x.match(/ho/gi);

    // Mostramos la longitud de los arrays recibidos
    console.log(cadena1.length);
    console.log(cadena2.length);
    console.log(cadena3.length);
    console.log(cadena4.length);
}

numeroPatrones("00101ABCHO");