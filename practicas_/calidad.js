
/**Comenzamos con el uso de los breakpoints, en el numero de linear,
 * esto hara que el codigo se detenga y mostrara las variables y su respectivo valor en las toolsdeveloper
 * en el apartado de scourse, tambien se puesde usar el comando de debugger que cumple la misma funcion con la dierencia
 * de que este comando debe colocarse de manera manual en el codigo en cuestion. 
 */

//debugger;

/** bucle de for solo por placer */


for(let i = 0; i< 5; i++){
    console.log(" numeros repetidos");
}


/**prueba de arreglos */
let cosas = [23, 34, 43];
console.log(cosas[0]);

cosas[0]=12;

cosas.push("probando el comando de push", 2025);// el comando push agregara los datos como indices individuales...
cosas.push(["probando el comando de push", 2025]);/**en este caso el arreglo obtendra estos indices como un segundo arreglo que formara 
parte de la segunda dimencion del array "[23, 34, 43, ["probando el comando de push", 2025]]"  */

//impresion de los indices
console.log(cosas[0]);
console.log(cosas[4]);
console.log(cosas[5]);

console.log(cosas);// mostrara el arreglo por completo...



