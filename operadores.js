//operadores aritmeticos

let a = 10;
let b = 5;

let sum = (a + b);
let rest = (a - b);
let multi = (a * b);
let div = (a / b);

//aplicacion de operadores aritmeticos
let precio = (a + b) * 1.5;

//operador modulo (result = dividen % divisor) (lo que sobra)
let precioUno = 10;
let precioDos = 5;
let precioFinal = precioUno % precioDos;
console.log({precioFinal});

//ejemplo de operador modulo

let papas = 13;
let persobas = 5;
let papasPorPersona = (papas % persobas);
console.log({papasPorPersona});

//operadores aritmeticos atajo (+=, -=, *=, /=, %=)

let count = 0;

count += 15;

count -= 5;

count *= 2;


//ejemplo de operadores aritmeticos atajo

let balance = 0;

balance += 100;

balance *= 1.1;

balance -= 50;

console.log({balance});


//operadores de comparacion (==, ===, !=, >, <, >=, <=)

let var1 = 13;
let var2 = 5;

//Igual
let varFinal = (var1 == var2);

//Identico
let varFinal2 = (var1 === var2);

//Diferente
let varFinal3 = (var1 != var2);

//Mayor que
let varFinal4 = (var1 > var2);

//Menor que
let varFinal5 = (var1 < var2);

//Mayor o igual que
let varFinal6 = (var1 >= var2);


//Menor o igual que
let varFinal7 = (var1 <= var2);

console.log({varFinal, varFinal2, varFinal3, varFinal4, varFinal5, varFinal6, varFinal7});


//ejemplo de operadores de comparacion

let edad = 21;

let canDrink = (edad >= 18);
console.log({canDrink});

//igualda debil

let bDebil = 5 == '5';
let aDebil = '9' == 9;
let cDebil = 0 == false;

console.log({bDebil, aDebil, cDebil});

//igualdad fuerte (false si no son del mismo tipo de dato)

let aFuerte = 5 === '5';
let bFuerte = 9 === 8;
let cFuerte = 0 === false;

console.log({aFuerte, bFuerte, cFuerte});

//igualdad fuerte (true si son del mismo tipo de dato y valor)

let aFuerte2 = 5 === 5;
let bFuerte2 = 9 === 9;
let cFuerte2 = 0 === 0; 

//desigualdad debil

let aDesigualDebil = 5 != '5';
let bDesigualDebil = 9 != 8;
let cDesigualDebil = 0 != false;

console.log({aDesigualDebil, bDesigualDebil, cDesigualDebil});

//desigualdad fuerte (false si no son del mismo tipo de dato)

let aDesigualFuerte = 5 !== '5';
let bDesigualFuerte = 9 !== 8;
let cDesigualFuerte = 0 !== false;

console.log({aDesigualFuerte, bDesigualFuerte, cDesigualFuerte});

//operadores logicos (&&, ||, !)

//AND (&&) - true si ambos son verdaderos

let b1 = true;
let b2 = true;
let b3 = true;
let b4 = b1 && b2 && b3;
console.log({b4});

//ejemplo de operador AND

let preciProducto = 100;
let precioEnvio = 20;
let estadoProducto = 'en almacen';

let envioListo = (preciProducto > 0 && precioEnvio > 0 && estadoProducto === 'en almacen');
console.log({envioListo});

//OR (||) - true si alguno es verdadero

let d1 = true;
let d2 = false;
let d3 = d1 || d2;
console.log({d3});

//ejemplo de operador OR

let clienteSuscrito = true;
let pagarConTarjeta = false;

let descuento = (clienteSuscrito || pagarConTarjeta);
console.log({descuento});

//operador NOT (!) - true si es falso y false si es verdadero

let e1 = 5;
let e2 = 10;
let e3 = !((e1 + e2) > (e1 - e2));
console.log({e3});

//ejemplo de operador NOT

let productoDisponible = false;
let productoAgotado = !productoDisponible;
console.log({productoAgotado});