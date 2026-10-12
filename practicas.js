//declarar variables string

let nombre = 'Juan';
let apellido = 'Perez';
let edad = '23';

//variables numericas

let a = 10;
let b = 5;
let c = 2.3;

//variables booleanas

let lloviendo = true;
let soleado = false;

//variables sin valor

let ciudad;
let precio;
let valor;

//nomenclatura de variables
/* se debe usar camelCase, no se debe dejar espacios, ni comenzar con un número */

//camelCase 
let fechaEntrega = "lunes";
//signo de $
let $precio = 200;
//variable con guion bajo
let _name = "Elizacbeth";

//constantes se usa la palabra reservada const

const Pi = 3.14;
const usersMax = 120;
const usersMin = 50;

//coercion de tipos de datos

let num = 10;
let str = "5";
let bol = true;

let a2 = String(num); //coercion de number a string
let b2 = Number(str); //coercion de string a number
let c2 = Number(bol); //coercion de boolean a number
let d2 = num + str; //coercion de number a string
let e2 = Bolean()

console.log({a2, b2, c2, d2});