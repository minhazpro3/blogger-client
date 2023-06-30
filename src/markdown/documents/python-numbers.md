# Comparison Operators in JavaScript

Comparison operators are used to compare values and return a boolean result (`true` or `false`) based on the comparison. JavaScript provides a variety of comparison operators that allow you to evaluate conditions and make decisions in your code.
 
 <br />

## Equal to (`==`)

The equal to operator (`==`) compares two values for equality. It returns `true` if the values are equal and `false` otherwise. It performs type coercion, which means it can convert values of different types to perform the comparison.

```js
console.log(5 == 5); // Output: true
console.log("5" == 5); // Output: true (string "5" is coerced to number 5)
console.log(5 == "5"); // Output: true (string "5" is coerced to number 5)
console.log(5 == 10); // Output: false
console.log(true == 1); // Output: true (boolean true is coerced to number 1)
console.log(false == 0); // Output: true (boolean false is coerced to number 0)
console.log(null == undefined); // Output: true
```
<br /><br />

## Not equal to (`!=`)

The not equal to operator (`!=`) compares two values for inequality. It returns `true` if the values are not equal and `false` if they are equal. Like the equal to operator, it performs type coercion.

```js
console.log(5 != 5); // Output: false
console.log("5" != 5); // Output: false (string "5" is coerced to number 5)
console.log(5 != "5"); // Output: false (string "5" is coerced to number 5)
console.log(5 != 10); // Output: true
console.log(true != 1); // Output: false (boolean true is coerced to number 1)
console.log(false != 0); // Output: false (boolean false is coerced to number 0)
console.log(null != undefined); // Output: false
```

<br /><br />

## Strict equal to (`===`)

The strict equal to operator (`===`) compares both the values and types of the operands. It returns `true` if the values are equal and have the same type. Unlike the equal to operator, it does not perform type coercion.

```js
console.log(5 === 5); // Output: true
console.log("5" === 5); // Output: false (string "5" is not equal to number 5)
console.log(5 === "5"); // Output: false (number 5 is not equal to string "5")
console.log(5 === 10); // Output: false
console.log(true === 1); // Output: false (boolean true is not equal to number 1)
console.log(false === 0); // Output: false (boolean false is not equal to number 0)
console.log(null === undefined); // Output: false
```
<br /><br />

## Strict not equal to (`!==`)

The strict not equal to operator (`!==`) compares both the values and types of the operands. It returns `true` if the values are not equal or have different types.

```js
console.log(5 !== 5); // Output: false
console.log("5" !== 5); // Output: true (string "5" is not equal to number 5)
console.log(5 !== "5"); // Output: true (number 5 is not equal to string "5")
console.log(5 !== 10); //
```

The strict not equal to operator is useful when you want to ensure that both the value and type of the operands are not equal.

It is important to note that the strict equal to operator (`===`) and the strict not equal to operator (`!==`) do not perform type coercion. They only return `true` if the values and types of the operands match.

<br /><br />

## Conclusion

The strict not equal to operator (`!==`) in JavaScript allows you to compare values and types to determine if they are not equal. It is a powerful tool for ensuring that both the value and type of the operands are different. Understanding and using this operator appropriately can help you make accurate comparisons and decisions in your JavaScript code.

<!-- Meta Title: JavaScript Strict Not Equal To Operator (`!==`): Comparing Values and Types -->

<!-- Meta Description: Discover the functionality of the strict not equal to operator (`!==`) in JavaScript. Learn how to compare values and types to determine if they are not equal. Explore examples and understand the importance of this operator for accurate comparisons in your JavaScript code. -->

<!-- Meta Keywords: JavaScript, strict not equal to, !== operator, comparing values and types, programming fundamentals -->
