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