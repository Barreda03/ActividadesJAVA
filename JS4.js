function divisores(num) {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 1): ", divisores(10));

const divisoresV2 = function(num){
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 2): ", divisoresV2(10));

const divisoresV3 = num => {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 3): ", divisoresV3(10));

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);
    
    let resultado =
    document.getElementById("resultado")
    resultado.value = divisores(numero)
}