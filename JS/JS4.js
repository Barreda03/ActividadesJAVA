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
    parseInt(document.getElementById("NUMERO").value);
    console.log(numero);
    
    let resultado =
    document.getElementById("RESULTADO")
    resultado.value = divisores(numero)
}

