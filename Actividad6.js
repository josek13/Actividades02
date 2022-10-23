//Variable que contiene el array bidimensional
var minas = [[0, 0, -1, 0], 
            [0, -1, -1, 0]];

function contandoMinas(x) {
    //Variable para contener el resultado
    var resultado = [[0, 0, 0, 0], 
                    [0, 0, 0, 0]];

    //Primer bucle for para recorrer el array
    for (var i = 0; i < x.length; i++) {

        //Segundo for para recorrer el array
        for (var j = 0; j < x[i].length; j++) {

            if (x[i][j] == -1) {
                resultado[i][j] = -1;
            } else {
                //Variable que almacenara las minas que encuentren
                var contador = 0;
                    
                //Derecha
                if (j < x[i].length) {
                    if (x[i][j + 1] == -1) {
                        contador++;                    
                    }
                }
                //Izquierda
                if (j > 0) {
                    if (x[i][j - 1] == -1) {
                    contador++;
                    }
                }

                //Arriba
                if (i > 0) {
                    if (x[i - 1][j] == -1) {
                        contador++;
                    }
                }

                //Abajo
                if (i < x.length - 1) {
                    if (x[i + 1][j] == -1) {
                        contador++;
                    }
                }

                //Arriba-derecha
                if (i > 0 && j < x[i].length) {
                    if (x[i - 1][j + 1] == -1) {
                        contador++;
                    }
                }

                //Arriba-izquierda
                if (i > 0 && j > 0) {
                    if (x[i - 1][j - 1] == -1) {
                        contador++;
                    }
                }

                //Abajo-derecha
                if (i < x.length - 1 && j < x[i].length) {
                    if (x[i + 1][j + 1] == -1) {
                        contador++;
                    }
                }

                //Abajo-izquierda
                if (i < x.length - 1 && j > 0) {
                    if (x[i + 1][j - 1] == -1) {
                        contador++;
                    }
                }

                //Contador a resultado
                resultado[i][j] = contador;
            }

        }
    }
    //Devuelvo la variable
    return resultado;
}
    

//Llamando a la función pasandole la variable 'minas'
console.log(contandoMinas(minas));