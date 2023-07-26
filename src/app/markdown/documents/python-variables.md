---
title: Python Variables
---

# Operators and Assignments in JavaScript

Operators and assignments are fundamental concepts in JavaScript that enable you to perform calculations, manipulate data, and assign values to variables. JavaScript provides a wide range of operators for different purposes, including arithmetic operations, comparison, logical operations, and more. Understanding operators and assignments is essential for writing effective JavaScript code.

<br />

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numeric values. JavaScript supports the following arithmetic operators:

- <strong>Addition (`+`) </strong> : Adds two operands.
- <strong>Subtraction (`-`) </strong> : Subtracts the second operand from the first
  operand.
- <strong>Multiplication (`*`) </strong> : Multiplies two operands.
- <strong>Division (`/`) </strong> : Divides the first operand by the second operand.
- <strong>Modulo (`%`) </strong> : Returns the remainder after division.
- <strong>Increment (`++`) </strong> : Increments the value of a variable by 1.
- <strong>Decrement (`--`) </strong> : Decrements the value of a variable by 1.

```js
var a = 5;
var b = 3;
console.log(a + b); // Output: 8
console.log(a - b); // Output: 2
console.log(a * b); // Output: 15
console.log(a / b); // Output: 1.6666666666666667
console.log(a % b); // Output: 2
a++; // a is incremented by 1
console.log(a); // Output: 6
b--; // b is decremented by 1
console.log(b); // Output: 2
```

<br />
<br />

## Assignment Operators

Assignment operators are used to assign values to variables. They combine the assignment (`=`) operator with other operators to perform the assigned operation and assign the result back to the variable.

```js
var x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

var y = 20;
y -= 3; // Equivalent to y = y - 3
console.log(y); // Output: 17

var z = 5;
z *= 2; // Equivalent to z = z * 2
console.log(z); // Output: 10

var w = 15;
w /= 3; // Equivalent to w = w / 3
console.log(w); // Output: 5
```

<br />
<br />

## Comparison Operators

Comparison operators are used to compare values and return a boolean result (true or false). JavaScript supports the following comparison operators:

- <strong> Equal to (`==`) </strong> : Returns `true` if the operands are equal in
  value.
- <strong> Not equal to (`!=`) </strong> : Returns `true` if the operands are not
  equal in value.
- <strong>Strict equal to (`===`) </strong> : Returns `true` if the operands are
  equal in value and type.
- <strong>Strict not equal to (`!==`) </strong> : Returns `true` if the operands
  are not equal in value or type.
- <strong>Greater than (`>`) </strong> : Returns `true` if the left operand is greater
  than the right operand.
- <strong>Less than (`<`) </strong> : Returns `true` if the left operand is less than the right operand.
- <strong>Greater than or equal to (`>=`) </strong> : Returns `true` if the left
  operand is greater than or equal to the right operand.
- <strong>Less than or equal to (`<=`) </strong> : Returns true if the left operand is less than or equal to the right operand.

```js
var a = 5;
var b = 3;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a === b); // Output
```

: false

```js
console.log(a !== b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false
```

<br />
<br />

## Logical Operators

Logical operators are used to combine and manipulate boolean values. JavaScript supports the following logical operators:

- <strong>Logical AND (`&&`) </strong> : Returns `true` if both operands are `true`.
- <strong>Logical OR (`||`) </strong> : Returns `true` if at least one of the operands
  is `true`.
- <strong>Logical NOT (`!`) </strong> : Negates the boolean value of the operand.

```javascript
var x = 5;
var y = 3;
var z = 7;

console.log(x > y && y < z); // Output: true
console.log(x > y || y > z); // Output: true
console.log(!(x > y)); // Output: false
```

<br />
<br />

## Conclusion

Operators and assignments are essential elements of JavaScript that allow you to perform various operations, comparisons, and assignments in your code. Understanding these concepts is crucial for manipulating data, controlling program flow, and creating effective JavaScript programs.
