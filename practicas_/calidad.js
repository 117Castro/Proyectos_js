
/**Comenzamos con el uso de los breakpoints, en el numero de linear,
 * esto hara que el codigo se detenga y mostrara las variables y su respectivo valor en las toolsdeveloper
 * en el apartado de scourse, tambien se puesde usar el comando de debugger que cumple la misma funcion con la dierencia
 * de que este comando debe colocarse de manera manual en el codigo en cuestion. 
 */

//debugger;

/** bucle de for solo por placer */


for ( let i = 0; i< 5; i++ ){
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



 let sdf = [2, 3, 4, 45, "ikmujhef"];

 console.log(sdf[0]);

/**Usando la metodologia de cola (queue) utilizamos las funciones de .push() y .shift()
 * 
 * usemos el ejemplo de una cola de super mercados, iniciamos con un cliente en la cola y de uno en uno 
 * se van sumando a la fila  y el primero que va llegando es el primero que se va despachando y cuntinua el siguiente en la fila. 
 */
   //         Array.push();
     //       Array.shift();  


/** Usando la metodologia de pila usamos .push() y .pop() para manejar los datos 
 * 
 * usemos el ejemplo de los platos cuando los estamos lavando, en este caso supongamos que estas lavando platos y quieres
 * tomar uno de ellos, en este caso tomas el ultimo que colocas en la pila de platos y no el primero que pusiste. 
 */

     //           Array.push();
      //          Array.pop();

/** Ahora usando el otras funcines: */

     //   Array.unshift(); //esta funcion me permite integrar elementos al inicio de los arreglos. 





    /**prueba de if con el agreado de un arreglo, haciendo peticion con datos quemados.  */
    const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

    function golfScore(par, strokes) {
      // Cambia solo el código debajo de esta línea

        if (strokes === 1){
          return names[0];
        } else if (strokes <= par - 2 ){
          return names[1];
        } else if (strokes === par - 1 ){
          return names[2];
        } else if (strokes === par ){
          return names[3];
        } else if (strokes === par + 1 ){
          return names[4];
        } else if (strokes === par + 2){
          return names[5];
        } else if (strokes >= par + 3 ){
          return names[6];
        } else {
        return "Change Me";
        // Cambia solo el código encima de esta línea
        }
    }

    
    console.log(golfScore(5, 4));

     




    





















