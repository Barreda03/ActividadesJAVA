function generar_tabla (numero, tipodetabla, longitudtabla) {

    let tablafinal = [];

    switch (parseInt(tipodetabla)) {

        case 1: /* Cuando es una tabla normal */

            for (i=0; i<= longitudtabla; i++) {

                tablafinal.push(`${numero} x ${i} = ${numero*i}`);

            }

            break;

        case 2: /* Cuando es una tabla invertida */

            for (i=longitudtabla+1; i> 0 ; i--) {

                tablafinal.push(`${numero} x ${i} = ${numero*i}`);

            }

            break

    }

    return tablafinal;

}

/*

generar_tabla(2, "1", 10);

 */




function calcular() {

    document.getElementById("tabla_obtenida_HTML").innerHTML = "";

    /* Numero de la tabla (la tabla del 2) */

    let numero = parseInt(document.getElementById("tabla").value);



    /* Tipo de la tabla */

    let tipo_de_tabla = parseInt(document.getElementById("tipo").value);



    /* Longitud */

    let longitud_tabla = parseInt(document.getElementById("longitud").value);



    /* Generar la lista con la tablas */

    let tabla_obtenida = generar_tabla(numero, tipo_de_tabla, longitud_tabla);

    console.log(tabla_obtenida);

    /* Donde se va a guardar la tabla */

    let lugar_a_colocar = document.getElementById("tabla_obtenida_HTML");



    for (i=1; i< tabla_obtenida.length; i++) {

        lugar_a_colocar.innerHTML += tabla_obtenida[i];

        lugar_a_colocar.innerHTML += "<br>";

    }

}