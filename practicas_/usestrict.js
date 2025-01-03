

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

    prueba_if();



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














