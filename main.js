
// Make your own calculator

/*
Node:1
var name1 = 20;
var name2 = 10
var Addition,Subtraction;

var Addition = name1 + name2;

document.write("Addition = " + Addition);

var Subtraction = name1 - name2;

document.write("<br>Subtraction =" + Subtraction );
*/

/*
Node:2
var name1 = prompt("Enter First Number: ");
var name2 = prompt("Enter Secon Number: ");

name1 = parseInt(name1, 10);
name2 = parseInt(name2, 10);

var Addition,Subtraction;

var Addition = name1 + name2;

document.write("Addition = " + Addition);

var Subtraction = name1 - name2;

document.write("<br>Subtraction =" + Subtraction );
*/

// Node:3
var name1 = prompt("Enter First Number: ");
var name2 = prompt("Enter Secon Number: ");

name1 = parseInt(name1, 10);
name2 = parseInt(name2, 10);

// var Addition,Subtraction,Multiplication,Division,Remainder;
var result;

// var + Addition,
// - Subtraction,
// * Multiplication,
// / Division (float),
// % Modulus / Remainder,

// var Addition = name1 + name2;

result = name1 + name2;

document.write(name1 + "+" + name2 + "=" + result + "<br/>");

result = name1 - name2;

document.write(name1 + "-" + name2 + "=" + result + "<br/>");
result = name1 * name2;

document.write(name1 + "*" + name2 + "=" + result + "<br/>");
result = name1 / name2;

document.write(name1 + "/" + name2 + "=" + result + "<br/>");
result= name1 % name2;

document.write(name1 + "%" + name2 + "=" + result + "<br/>");
