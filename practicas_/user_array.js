/**funcion que toma un numero del usuario y lo introduce a el arreglo */

let newarr = ["1", 1, 2, 3, "2"];
document.getElementById("arreglo").innerHTML ="Before: " + JSON.stringify(newarr); 

let other_array = ["1", 1, 2, 3, "2"]; 
document.getElementById("pila_arreglo").innerHTML ="Before: " + JSON.stringify(other_array); 




function myArreglo_usuario(arr, item) { //esta fucin toma los argumentos desde un arreglo y del usuariopara agregar y eliminar un datos.

    arr.push(item); //introduce un nuevo dato al final del arreglo.
    let delet= arr.shift();//elimina y almacena el dato de la posicion 0. 
    
}


function myArray_pila(arry, items) {/**Esta funcion cunple el mismo procedimiento de la anterior, la diferencia es que en lugar de eliminar el primer dato
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



