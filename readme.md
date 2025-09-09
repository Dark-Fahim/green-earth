# Q&A

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Answer 1:**  
getElementById just get a unique id or unique item, when getElementsByClassName get multiple items with matched class name, also querySelector means get 1 item or 1st item from dom using css selector #id or .class, but querySelectorAll get multiple items using css selector by .class tag name etc.

---

## How do you create and insert a new element into the DOM?
**Answer 2:** 
first of all i need to get dom container, then i am create a new div in dynamically using createElement() function then i need to append this div into container, using appendChild() function.

---

## What is Event Bubbling and how does it work?
**Answer 3:**  
Event Bubbling a process who starts from deep and then bubble will be up, like a parent div inside a btn, when i click this btn then this hitted firstly button then go up to parent div then hitted body also ans lastly document.
---

## What is Event Delegation in JavaScript? Why is it useful?
**Answer 4:**  
event delegation a smart way to stop event bubbling, a technique using listener in parent div, event delegation is use full because if normally dynamically add new item in parent then event listener is not working that item, but if i use event delegation then if new item add dynamically then its working listener fine, this is why event delegation is useful.

---

## What is the difference between preventDefault() and stopPropagation() methods?
**Answer 5:** 
preventDefault() is default form or browser action, when stopPropagation() is stopping event reaching parent div,
preventDefault() stops browser action like form submit or page refresh etc, but stopPropagation() stops event bubbling 
