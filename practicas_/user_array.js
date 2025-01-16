

/**funcion que toma un numero del usuario y lo introduce a el arreglo */

let newarr = ["1", 1, 2, 3, "2"];
document.getElementById("arreglo").innerHTML ="Before: " + JSON.stringify(newarr); 

function myArreglo_usuario(arr, items){ //esta fucin toma los argumentos desde un arreglo y del usuariopara agregar y eliminar un datos.

    arr.push(items); //introduce un nuevo dato al final del arreglo.
    let delet= arr.shift();//elimina y almacena el dato de la posicion 0. 
    
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


/** Funcion de limpiesa mef¿diante boton extra
function limpiar(){

    document.getElementById("date_user").value = "";
}
*/