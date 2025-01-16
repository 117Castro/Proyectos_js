
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

console.log("Pds. los datos se modifican en todo el arreglo y modifica todos los console.log()")
console.log(cosas);// mostrara el arreglo por completo...

/** solo por molestar pq estaba y no sabia que pedo */

let myArray_frutas = [["manzana", 2], ["perejil", 5], ["marihuana", 89]];
console.log(myArray_frutas); //impimira todo el arreglo con los indices proporcionados...

myArray_frutas.pop(); //me permite eliminar el ultimo dato de mi arreglo 
console.log(myArray_frutas);


let show_old_date = myArray_frutas.shift(); //usando el comando de .shift puedo eliminar el ultimo dato de mi arreglo y almacenarlo en una variable.
console.log(myArray_frutas);
console.log(show_old_date);

//usando el nuevo comando de .unshift agrego un nuevo dato pero al inicio de mi arreglo...
myArray_frutas.unshift(["nuevo dato 2d", 234]); 
console.log(myArray_frutas);



/**Usando la metodologia de cola (queue) utilizamos las funciones de .push() y .shift()
 * 
 * usemos el ejemplo de una cola de supepr mercados. 
 */
Array.push()
Array.shift();  


/** Usando la metodologia de pila usamos .push() y .pop() para manejar los datos 
 * 
 * usemos el ejemplo de los platos cuando los estamos lavando
 */

Array.push();
Array.pop();

/** Ahora usando el otras funcines: */

Array.unshift(); //esta funcion me permite integrar elementos al inicio de los arreglos. 








