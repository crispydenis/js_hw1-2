/* Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780. */

let a = 8,
    b = 3

    // Уравнение 1: a + 2(x - b) = 16
let x1 = (16 - a) / 2 + b;

// Уравнение 2: b(x + 15) = a + 6x
let x2 = (a - 15 * b) / (b - 6);

// Уравнение 3: x + 2x + ax + bx = 23780
let x3 = 23780 / (1 + 2 + a + b);

console.log("x1:", x1);
console.log("x2:", x2);
console.log("x3:", x3);