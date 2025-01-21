

//pos no hay efecto en el agregar esta linea de modo estricto

'use strict';
// alert(23+43);
console.log("prueba del uso de scrit");

function suma(){
    

    console.log(23 + 34- 98 * 3 );// vkughfvk 

    return;
}

// suma();



function muesrtauser(){

    let userpron= prompt("como te llamas?");

    alert(userpron);
}
//muesrtauser();



let x = 1;
x= -x;
console.log(x);

let s="we";
console.log(+s);



// let ret= +prompt("esccribe un numero");  el aler aler por defecto es string.
// let ter= +prompt("escribe otro");

// // alert(ret+ter);

// terminos de igualdad, es algo que ya vi y lo tengo bien grabado en la memoria pero lo wa ver pq debo repasarlo

//no se si este llendo lento, pero de que llego llego.




// alert("hola");
// [1, 2].forEach(alert);


// en js el valor 0 es evaluado como true al igual que espacio, sin envargo el dejar el string sin espacio y vacio 
// toma el valor como false
// alert(Boolean(""));


//------------------------
//uso del if....


let year= 2015;
     if (year == 2015) 
        console.log("eres muy listo");



     let numeros= (year==2015);
     if (numeros){
        console.log("if comparando con el uso de una variable. ");
     }else {
        console.log("mo es correcto");
     }


    function prueba_if(){
        // let year= document.getElementById("años").value;
        let year= prompt("escribe un mumero entre 2 y 5");

        if (year>=2 && year<=5){
            console.log('tu numero esta dentro del rango');
        } else if(year<2 && year==1 || year>5){ 
            console.log("tu numero esta fuera del rango");
        }else{
            console.log("no escribiste un numero y solo diste enter, pinche webon");
        }
        //si quiero jugar con rangos, dentro de lo permitido debo usar AND y fuera de lo permitido debo usar OR, algo nuevo...

    }

    // prueba_if(); //_--------------- funcion de prueba de if ---------------------------



    function ternario(){

        let edad= prompt("edad?", 18); //el segundo valor se imprime con el alert. 

        let total= (edad<18)? 
        console.log("eres menor"):
        console.log("eres mayor");





    }

    // ternario();


    function nombrejs(){
        let name= prompt("¿Cuál es el nombre “oficial” de JavaScript?")
        

        if(name=="ECMAScript"){
            console.log("es correcto!!");
        }else{
            console.log("es incorrecto, el nombre oficial es: ECMAScript ");
        }
    }

    // nombrejs();


    function numeros0(){
        let num = prompt("escribe un numero ");

        if  (num > 0){
            console.log("1");

        }else if(num < 0){
            console.log("-1");

        }else{
            console.log("0");
        }
    }

    // numeros0();


    function converternario(){
        let resu;

        let val= (2+1<4)?resu="debajo":
        resu="ensima";

        console.log(resu);
    }

    // converternario();



    function converif(){
        let login= "empleado";

        //la sintaxis es la correcta pero debo agregar la funcionalidad
        let mensaje= (login == "empleado")? "hola":
        (login == "director")? "felicidades":
        (login == "")? "sin secion":
        "  ";
        console.log(mensaje);

    }

    // converif();




    //puertas AND, OR, NOT

// login usando puertas logias


function login_logico(){

    let username= prompt("Introduce tu nombre de usuario");

    if (username=== "admin"){

        let pasw= prompt("escribe tu contraceña")
        if (pasw=== "123"){
            alert("bienbenido");

        }else if (pasw===""||pasw===null){
            alert("cancelado");

        }else{
            alert("no eres tu ")
        }



    }else if (username === "" || username=== null){
        alert("cancelado");
    }else{
        alert("no te conozco");
    }
}

// login_logico();


//el condicional nullish es un comparador, imprimira el valor que si esta definido y evitara el que es null o undefined
//es muy parecido a OR la diferencia es que uno imprime le primer valor que sera verdadero y el otro imprime el primero que este definido

    let a, b=2;
    console.log(a??b);


    let ds, gj=0;
    console.log(ds||gj||100);// OR toma al sero como falso y deja al siguiente valor imprimirse. 
    console.log(ds??gj??100);//mientras que nullish imprime el primer valor que es definido aun cuando sea 0.



// WHILE y FOR


let i=0;

while(i < 3){  //repite el bucle hasta que se cmpla la condicion
    console.log(i);
    i++;

 }

do{  // esta sintaxis es cuando quiero que se imprima almenos una vez antes de ver la condicion
    
    console.log(i);
    i++;
}while(i<5);


function mientras(){

    let i = 1;

    while(i<=10){
        console.log("i");
        i++;
    }
}
// mientras();


//for

for(let i=0; i<3; i++){
    console.log("i", i);

}



function forpares(){

    for (let i = 0; i < 10; i++) {
    
        // si es verdadero, saltar el resto del cuerpo
        if (i % 2 == 0) continue;
      
        //console.log(i); // 1, luego 3, 5, 7, 9
      }
}

// forpares()





//practicas de tarea

function tarae1(){
    let i =3;
    while(i){
        console.log(i--);

    }
}

tarae1();


function incrementoinicio0(){

    for (let i=0; i <5; i++){ //esto es igual al while de la linea 228, inicia desde el 0
        alert(i);
    }
}

// incrementoinicio0();



//imprimiendo numeros pares
function numpares(){
    for (let i = 2; i <=10 ; i++){
        if (i % 2 == 0){
            alert(i);
        }
    }
}

// numpares();


function converwhil(){

    let i = 0;
    while(i<3){
        alert(`número ${i}!`)
        i++;
    }
}

// converwhil();



//El uso de do while, primero ejecuta el cuerpo del codigo y luego se verifican las condiciones, no lo habria descubierto de no verlo en la solucion. 

function cien(){


    let num;
    do{
        num= prompt("escribe un numeor mayor a 100", 0);

    }while(num<=100 && num);
}


// cien();





function imparesN(){

    let val = prompt("Hasta que numero quieres saver los impares ", 0);

    for (let i = 2; i< val; i++){
        if (i % 2 == 0) continue;
        alert(i);
    }
}
// imparesN();
  // estupendo logre hacer que funcionara por mi mismo. solo tuve que reutilizar la formula de antes "(i % 2 ==0) continue;"



function dosN(){

    let n = prompt ("escribe el numero al que quiees llegar ", 0);

    nexprimo:
    for (let i =2; i <= n; i++){

        for( let j =2; j < i; j++){
            if (i % j == 0) continue nexprimo;
        }
        alert(i);
    }


}

// dosN();


//sintaxis de uso de switch


//--tarea

function navegadores_sitch(){
    let navegador = prompt("cual es tu navegador", "opera");

if (navegador == "edge"){
    alert("tienes Edge");
}else if (navegador== "chrome"
    ||navegador== "firefox" 
    ||navegador== "safari"
    ||navegador== "opera"){
        alert("esta bien soportamos este tipo de navegadores");
}else {
    alert("esperamos que esta pagina se vea bien")
}
}

// navegadores_sitch();


function switch_prueba(){
    let a = +prompt("escribe un numero del 0 al 3");

    switch (a){
        case 0:
            alert("tu numero es 0");
            break;
        case 1:
            alert("tu numero es uno");
            break;
        case 2:
        case 3:
            alert("tu numero es 2 o 3");
            break;
        default:
            alert("no pos ya valio madre, tu numero no es. ");
        }
}

// switch_prueba();



function showMessage(from, text = "sin texto") { //al no colocar un argumento en el paremetro lo coloca como indefinido pero podemos asignar algo en caso que pase esto...
    alert( from + ": " + text );
  }
  
//   showMessage("Ann", "buerro"); // Ann: sin texto


// prefijos usados para funciones:

// get--- devuelve un valo
// show--- muestra algo
//calc-- calcula valores
//create-- crea algo
//check --- verifica algo

let getmensaje = function(){
    alert("hola mundo");
}

// getmensaje();  //es mas comun ell uso de expreciones de variables.


// expreciones de funciones con reasignacion de variables

let sayi = function(){
    alert("prueba de exprecion de funcones");

}; //se debe colocar el punto y coma en el caso de que estemos hablando de expresion de funciones 

// sayi();

let showfuncion = sayi;

// showfuncion();
// sayi();



//------------------------ funcion usando parametros

function ask(pregunta, yes, no){
    if (confirm(pregunta)) yes()
        else no()
}


function showOk(){
    alert("confirmado");
}

function showCancelado(){
    alert("cancelado");
}

// ask("¿Confirmas o no?", showOk, showCancelado);




let showAlertsMensages = function(){
    confirm("estas sentado");

    alert("estas semtado");
    
    let ghy= prompt("maniderfwaohuf  ");
    
    console.error(ghy);
    console.log(ghy);

}


/*Exprecion de funciones, me permite declarar una funcion fuera de bloque, pero con una declaracion no es posible */
function showAnidados(){


let pregunta= prompt("que edad tienes", 18);

let welcome;

if (pregunta > 18){
    welcome  = function(){
        alert("hola");
    }

} else {
    welcome =function (){
        alert("Menor de edad");
    }


}

welcome();

}


// showAnidados();


//el uso de \ para poner comilasentre comillas es un atnto molesto
const myStr = "I am a \"double quoted \" string inside \"double quotes\".";

// console.log(myStr);
/**
 * tambien aprendi a como poner texts comentados en js usando el ente y el asterisco..
 * est util para no tener tan largas las lineas de codigo y asi que sea mejor y mas 
 * facil leer lo que estoy colocando en el texto...
 */




// prueba de funciones de flecha

let func= ()=> alert("Prueba de funciones");
// func();




/**prueba de funciones de flech usando una variable para introduciir un valor */

// let getvalor= +prompt("ingresa un valor nuemrico", 0);

            /**diferentes foras de escribir la funcion y obtener el mismo resultado */
let func2= val2 => {

    let prub =(val2 * 46)/2;
document.getElementById("numero").innerHTML= prub;

    console.log((val2 * 46)/2);
};

// func2(getvalor);

let func3= ()=> console.log((getvalor * 46)/2);
// func3();




//-------------------------------------------------------------------
/** Tarea de funciones de flecha */

let lol = (pregunta, yes, no) => {
    if (confirm(pregunta))yes();
    else no();
};

/**lol( //colocando argumentos con utilidad de funciones
    "¿Estas sentado frente a tu computador?",  
     function(){alert("confirmado")},
      function(){alert("negativo")}
);


lol( //usando funcioes de flecha para declarar argumentos
    "¿Estas sentado frente a tu computador?",
     ()=> alert("confirmado"),
     ()=> alert("negativo")
);*/

//----------------------------------------------------------------------

/**que buena onda, par colocar la pleca inverida es utilizando el teclado en ingles 
 * y de la misma laptop, usando la tecla de llave de cierre o en teclado en ingles la tecla de \\.
 * Tambien el como poner comillas invertidas para colocar variables o formulas entre texto es usando la tecla antes
 * del numero 1. Siempre con teclado en INGLES!!!!
 */
let alt= 34;
console.log(`hola como estas $${alt}`);






console.log("Hola \"mundo cruel\" que viva mexico");

console.log("\nprimera liena\n\tprueba de tabulacion de segunda linea\ntercera linea");

/**prueba de length */
let longitud= "prueba de longitud de texos";

console.log(longitud.length);






