/* Ejemplo Arreglos */

let salario = 0
let horas = 48
let pagoxhora = 30


/* Si no tiene horas extras */
if (horas <= 40) {
    let salario = horas * pagoxhora;
    console.log(salario)
}
/* Si tiene horas extras */
else{
    let salario = (40 * pagoxhora) + ((horas-40) * pagoxhora*3)
    console.log(salario)
}