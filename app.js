let nombre = "Valentin";
let nombre2 = "Leandro";
let lenguajeDeUsuario;
let valor1 = Math.floor(Math.random()*100+1);
let valor2 = Math.floor(Math.random()*100+1);
let resultadoSuma;
let resultadoResta;
let edadUsuario;
let numero;
let numeroBucle = 1;
let notaAsignada = Math.floor(Math.random()*10+1);
let notaFija = 7;
let numeroAleatorio1= Math.random();
let numeroAleatorio2 = Math.floor(Math.random()*10+1);
let numeroAleatorio3 = Math.floor(Math.random()*100+1);

//console.log(typeof(valor1));
console.log(valor1);
//! 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Hola mundo, Bienvenidos a esta practica XD");

//! 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza 
//! console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del 
//! navegador.
console.log("¡Hola, " + nombre + "!");

//! 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza 
//! alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola, ${nombre2}!`);

//! 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación 
//! que más te gusta?. Luego, almacena la respuesta en una variable y muestra la 
//! respuesta en la consola del navegador.
lenguajeDeUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("El lenguaje que más te gusta es: " + lenguajeDeUsuario);

//! 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles 
//! valores numéricos de tu elección. Luego, realiza la suma de estos dos valores 
//! y almacena el resultado en una tercera variable llamada "resultado". Utiliza 
//! console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual 
//! a [resultado]." en la consola.
resultadoSuma = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultadoSuma + ".");

//! 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles 
//! valores numéricos de tu elección. Luego, realiza la resta de estos dos valores 
//! y almacena el resultado en una tercera variable llamada "resultado". Utiliza 
//! console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es 
//! igual a [resultado]." en la consola.
resultadoResta = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultadoResta + ".");

//! 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
//! utiliza un if para verificar si la persona es mayor o menor de edad y muestra un 
//! mensaje apropiado en la consola.
edadUsuario = prompt("Escribir tu edad:");
if (edadUsuario >= 18) {
    console.log("Felicidades, eres mayor de edad");
} else {
    console.log("Aún eres menor de edad");
}

//! 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica 
//! si es positivo, negativo o cero utilizando un if-else y muestra el mensaje 
//! correspondiente.
numero = prompt("Escribir um número por favor:");
if (numero == 0) {
    console.log("El número que escribiste es CERO");
} else if (numero < 0) {
    console.log("El número que escribiste es NEGATIVO");
} else {
    console.log("El número que escribiste es POSITIVO");
} 

//! 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
while (numeroBucle <= 10) {
    console.log(numeroBucle);
    numeroBucle++;
}
//! 11. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else 
//! para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" 
//! en la consola.
if (notaAsignada >= notaFija) {
    console.log("Felicidades, APROBASTE con " + notaAsignada);
} else {
    console.log("Uy!... DESAPROBASTE con " + notaAsignada);
}

//! 12. Utiliza Math.random para generar cualquier número aleatorio y muestra ese 
//! número en la consola.
console.log(numeroAleatorio1);

//! 13. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese 
//! número en la consola.
console.log(numeroAleatorio2);

//! 14. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra 
//! ese número en la consola.
console.log(numeroAleatorio3);