/**funcion que toma un numero del usuario y lo introduce a el arreglo */

let newarr = ["1", 1, 2, 3, "2"];
document.getElementById("arreglo").innerHTML ="Before: " + JSON.stringify(newarr); 

let other_array = ["1", 1, 2, 3, "2"]; 
document.getElementById("pila_arreglo").innerHTML ="Before: " + JSON.stringify(other_array); 




function myArreglo_usuario(arr, item) { //esta fucin toma los argumentos desde un arreglo y del usuariopara agregar y eliminar un datos.

    arr.push(item); //introduce un nuevo dato al final del arreglo.
    let delet= arr.shift();//elimina y almacena el dato de la posicion 0. 
    
}


function myArray_pila(arry, items) {/**Esta funcion cunple el mismo procedimiento 
    de la anterior, la diferencia es que en lugar de eliminar el primer dato
    * elimina el ultimo dato de dicha funcion.
    */

    arry.unshift(items);
    let borrar = arry.pop();
}





/** Esta funcion se encarga de tomar los datos del usuario, ejecutar la funcion myarreglo_usuario()
 * y mostrar la nueva informcion y al mismo tiempo limpiar los espacios del input.
 */
function dato_usr(){
    
    let get_user_date = document.getElementById("date_user").value;
    myArreglo_usuario(newarr, get_user_date);
    document.getElementById("arreglo2").innerHTML ="After: " + JSON.stringify(newarr); 
    document.getElementById("date_user").value = "";
}


function datos_pila(){
    let get_user_pila = document.getElementById("pila_date").value;
    myArray_pila(other_array, get_user_pila);
    document.getElementById("arregloPila").innerHTML = "After: " + JSON.stringify(other_array); 
    document.getElementById("pila_date").value = "";
    

}



/**Esta funcion lo que hace es el uso de shift(), elimina el ultimo elemento de un 
 * arreglo sin agregar un nuevo dato.
*/
function delete_shift(){
    
    other_array.shift();
    document.getElementById("arregloPila").innerHTML ="After: " + JSON.stringify(other_array); 
    
    
}


/** Funcion de limpiesa mef¿diante boton extra
 function limpiar(){

 document.getElementById("date_user").value = "";
 }
 */





//---------------------------------------------------------------------------------
/** Funcion de prueba: copia el valor de un input e 
 * imprimelo en otro input al hacer clic en un boton */

document.getElementById("imput1").focus(); /**este comando me permite focalizar 
el imput para escribir directamente ahi al cargar la pagina
*/

function showImput() {
    let getUsuario = document.getElementById("imput1").value;

    document.getElementById("imput2").value = getUsuario ;/**al querer mostrar un valor en un input
    la etiqueta de .innerHTML no funcionara, en su lugar se debe usar la etiqueta .value */
}

document.getElementById('imput1').addEventListener('keyup', inputCharacters);/** con el evento addEventListener 
asignamos eventos ya sea a botones o tambien a otros elementos como los input
keyup permite que los procesos se ejecuten unicamente cuando las teclas se lavantan al ser precionadas, 
tambien esta el evento keydown, keypress; eventos que hacen la misma funcion pero en distintas etapas de 
precion de boton. */

function inputCharacters(event) {
    if (event.keyCode == 13) { // esta linea especifica el code de la tecla enter
        document.getElementById('botonin').focus();/** la funcion .focus() focalisa 
        el elemento en la que la coloquemos */
        event.preventDefault();/**esta funcion permite prevenir eventos que no 
        queremos que pasen, asi de simple */
    }

}


//-----------------------------------------------------------------------------------------------

/**Escribe comentarios cunado el codigo se muy explicito y no se entienda de manera intuitiva,
 * y no escribas comentarios que explique como funciona el codigo o una funcion.
 */

