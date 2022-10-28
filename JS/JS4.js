function divisores(num) {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (v1): ", divisores(10));

const divisoresV2 = function(num){
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (v2): ", divisoresV2(10));

const divisoresV3 = num => {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (v3): ", divisoresV3(10));

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);
    
    let resultado =
    document.getElementById("resultado")
    resultado.value = divisores(numero)
}

function imagen(){
    let numeroimagen = 
    parseInt(document.getElementById("numeroimagen").value);
    console.log(numeroimagen);
    
    switch ( numeroimagen ) {
        case 1:
            document.getElementById("imagenforms").src="https://www.sonica.mx/u/fotografias/m/2022/7/14/f638x638-25008_83175_5050.jpg";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 2:
            document.getElementById("imagenforms").src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5UUMLD3IYVCEFGYJR2RBWEY7EM.jpg";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 3:
            document.getElementById("imagenforms").src="https://www.random.news/__export/1666290443141/sites/debate/img/2022/10/20/disenxo_sin_tixtulo_-_2022-10-20t112258_092.png_2100467590.png";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 4:
            document.getElementById("imagenforms").src="https://i.pinimg.com/236x/a4/5b/6e/a45b6e342a522f5323b49ce22db28968.jpg";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 5:
            document.getElementById("imagenforms").src="https://media.ticketmaster.com/tm/en-us/dam/a/c3b/212982a9-c9db-40de-92b3-18b974fadc3b_1793831_CUSTOM.jpg";
            document.getElementById("imagenforms").style.display = "block";
            break       
    }
}
