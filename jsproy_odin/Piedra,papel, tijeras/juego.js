

//juego de piedra papel o tijera
//no te enfoques en el final mejor enfocate en codificar y practicar aprendiendo de los errores


//funcion de eleccion de la computadora

function getelecionpc(){
    const eleccion= ["piedra", "papel","tijera"];
    const aleatorio= Math.floor(Math.random()*eleccion.length);
    return eleccion[aleatorio];

}


//funcion para obtener la elecion del usuario
function getelecionusuario(){
    const playerchoise = prompt("Elija una opcion: 'Piedra', 'Papel' , 'Tijera' ").toLowerCase();
    return playerchoise; 
}


//funcion de comparacion entre usuario y pc

function determinarganador(playerchoise, consolechoise){
    if (playerchoise === consolechoise){
        return "El resultado es un empate!!";
    }

    if ((playerchoise === "piedra" && consolechoise === "tijera")||
        (playerchoise === "papel" && consolechoise === "piedra")||
        (playerchoise === "tijera" && consolechoise === "papel")){
            return "Eres el ganador!!!";
        }
    else{
        return "Haz perdido contra la maquina";
    }
}


//funcion que complete el juego 



function playergame(){
    const playerchoise = getelecionusuario();
    const consolechoise = getelecionpc();

    console.log("Tu eleccion fue: ", playerchoise );
    console.log("La eleccion de la maquina fue: ", consolechoise);

    const result= determinarganador(playerchoise, consolechoise);
    console.log(result);

}

playergame();