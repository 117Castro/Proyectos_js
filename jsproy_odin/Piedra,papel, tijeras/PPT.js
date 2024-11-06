
console.log("Hola mundo.")


let numr = Math.random();
console.log(numr);



//metodos para obtener numeros aleatorios con un rango estipulado por mi... 
let randomInt = Math.floor(Math.random() * 3);
console.log(randomInt);


function getRandomArbitrary(min, max) {
    return  Math.floor(Math.random() * (max - min) + min);
  }

console.log(getRandomArbitrary(3,5));

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min); //Math.ceil(redondea hacia arriba))
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

console.log(getRandomInt(2,6));


// prueba de codi para piedra papel o tijera, seguramenyte no funcione.....





































console.log("---------------------------------")
function suma(){
    let val1 = 23;
    let val2 =12;

    let sumatoria = val1+val2;
    //console.log(sumatoria) este console aqui probocara que imprima al ejecutar
    // y al llamar a la funcion
    return sumatoria; 
}
console.log(suma()); //al hacerlo de esta manera evitara que imprima dos veces 
//en la consola


function sum2(){
    let sd= 3452 + suma();
    console.log(sd);
    return sd;
}

sum2();

console.log("genial, estoy entendiendo a js en consola y funciones")