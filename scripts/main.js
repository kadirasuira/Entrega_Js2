/* JUEGO DE ADIVINANZA DE NÚMERO, EL PROGRAMA GENERARÁ UN NÚMERO ALEATORIO DEL 1 AL 50, TENDRÁS CUATRO INTENTOS, 
    PARA AYUDARTE EL PROGRAMA TE DARÁ PISTAS, PODRÁS ELEGIR 3 PISTAS POR PARTIDA.


    PISTAS DE MAYOR O MENOR : Te dirá si el número es mayor o menor al que pusiste
    PISTA CALIENTE Y FRIO : El juego te dirá un rango aleatorio de dónde se encuentra el número.
    PISTA DEL PAR O NOPAR: El juego te dirá si es Par o no.

*/ 


const diccionario = [
    "ardilla","gorila","iguana","pajaro",
    "tortuga", "tiburon", "serpiente", 
    "conejo", "gallina", "caballo", "medusa", "ballena",
    "cangrejo", "calamar", "jirafa" 
  ];
  
const frases = [
    "Animal que le gusta comer bellotas\n",
    "Animal grande que le gusta la banana\n", 
    "Animal de cuatro patas, parecido a un cocodrilo. \nEs el personaje principal de la pelicula 'Rango'.\n", 
    "No tiene dientes\n", 
    "Es lenta\n",
    "Viven en el océano, hay una canción de reggaetón que lo menciona\n",
    "No tiene patas y vive en la tierra\n",
    "Animal que le gusta saltar.\n", 
    "Animal que produce lo que muchas veces consumimos en el desayuno.\n",
    "Animal que se utilizaba como transporte antes de los carros.\n", 
    "Animal que vive en el agua y es un monstruo en la mitología griega.\n",
    "Animal mas grande del mundo\n","Animal que les gusta pescar y esconderse en la arena.\n", 
    "Este animal vive en el agua. Sale en Bob Esponja.\n",
    "Animal con gran altura\n" 
  ];

let n; // Variable para generar numero random y frases
let vidas; // Cantidad de vida que llevas
let vidasDefinida = 6; // Variables de vida definida (Las que guarda cuantas vidas quedan)
let puntajeTotal; // Puntaje que sacas
let mayorPuntaje = 0; // Mayor puntaje de todos
let nombreMejor = ''; // El nombre del jugador con mayor puntaje
let nombreJugador = ''; // Nombre de jugador
let puntaje; // Puntaje del Jugador
let lon; // longitud de la nueva palabra
let vacio; // Espacio vacío donde se pueda agregar la palabra
let nuevaPalabra = ''; // Nueva Palabra agregada
let nuevaFrase = ''; // Nueva frase agregada

function menu(){
    alert("¡Bienvenido al Ahorcado");

    let opcion = parseInt(prompt("MENU DEL JUEGO \n 1. Empezar a Jugar \n 2. Instrucciones del Juego \n 3. Configuración del Juego \n INGRESE EL NÚMERO DE LA OPCION:"));

    if (opcion == 1){
        juego_ahorcado();
    }
    else if (opcion == 2){
        instrucciones();
    }
    else if (opcion == 3){
        buscador();
    }
    else{
        alert("Porfavor introduce una opción válida del Menú (Número)");
        menu();
    }
}

function instrucciones(){
    alert("Intrucciones del Ahorcado \n Las palabras tienen que ver con los nombres de un animal");
    alert("Si en tal caso la palabra tiene una tilde, no la ponga, el programa se lo pondra como error. \n Tienes 5 Vidas de fábrica");

    let opcion = parseInt(prompt("¡BUENA SUERTE! \n 1. Empezar a Jugar \n 2.Regresar a Menú \n INGRESE EL NÚMERO DE LA OPCION:"));

    if (opcion == 1){
        juego_ahorcado();
    }
    else if (opcion == 2){
        menu();
    }
    else{
        alert("Opción incorrecta, se le enviará al Menú....");
        menu();
    }
}

function juego_ahorcado(){
    
}

menu();