### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById can catch only one element usign ID.
getElementsByClassName can catch more than one elements using class name.

querySelector/querySelectorAll can cath elements like CSS Selector using id, class, tag name. 

querySelector catch only first matching element whereas querySelectorAll can catch all matching element.

### 2. How do you create and insert a new element into the DOM?

Step-01: create element

const div = document.createElement("div");

Step-02: Insert New element
div.appendChild("newDiv");


### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a concept in JavaScript DOM events where an event starts from the target element and then propagates (bubbles up) to its parent elements one by one.

It moves from inside to outside or bottom to up.
Example: child → parent → grandparent → document


### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.

pros:
01. Dynamic
02. Better Performance
03. Increase readability

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used for prevent browser default behavior.

whereas stopPropagation() is used for stop the event of Bubbling.
