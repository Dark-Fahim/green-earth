# Q&A

## What is the difference between var, let, and const?
**Answer 1:**  
var is a function scop but let and const is block scope, var can accessible hoisting from any where it throw undefined, but let and const throw an error, re declaring allowed is var, but let and const not re declarable, also var and let value are re-assignable, but const value are not re-assignable 

---

## What is the difference between map(), forEach(), and filter()?
**Answer 2:** 
map(), forEach(), and filter() all are loop in js, but the difference is when you call map for an array loop it will return you a value, but if you call forEach for loop, its working on array but cannot return you anything, and lastly filter is also type of map but map and can loop all value an array but filter only loop those values that condition will fulfilled and return the value.

---

## What are arrow functions in ES6?
**Answer 3:**  
arrow function shorter and cleaner than js regular function, ecmascript6 intro to arrow function in 2015, regular function cannot return anything if you don't call return keyword, but arrow func can return if you call function in 1 line then no need to call return keyword
---

## How does destructuring assignment work in ES6?
**Answer 4:**  
destructuring is shorter way to access values from array and object, for array and object destructuring you don't need to call dif variable, you can avoid like, "let value1 = arr[0]", or "let name = person.name", instead of you can use only "let [value1, value2] = [0,1]" and for object 'let {name, address} = {name: "fahim", address: "chandpur"}'.

---

## Explain template literals in ES6. How are they different from string concatenation?
**Answer 5:** 
template string is much easier than concatenation, in concatenation if you need a new line for string you need to use /n but in template string you need to just press enter btn and this go to new line, also template string have expression support ${}. template string is much cleaner and modern then string concatenation
