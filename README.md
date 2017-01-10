# Frontend-Cookbook
HTML5, CSS3, and JavaScript concepts 

##HTML5
***
https://www.w3.org/TR/html-markup/elements-by-function.html

##JavaScript
***
The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser.
Credit, http://www.javatpoint.com/browser-object-model.
![alt text](http://www.javatpoint.com/images/javascript/bom.jpg "Logo Title Text 1")

Moreover default object of browser is window means you can call all the functions of window by specifying window or 
directly. For example:
```javascript
window.alert("hello javatpoint");
```
Or
```javascript
alert("hello javatpoint");
```

Place script tags for JavaScript in the "<head>" tag and use the "async" and "defer" attributes
to prevent the HTML Parser from being blocked while the external script is being loaded
NOTE - Use the "defer" attribute to preserve the execution order of the script tags.
Credit: http://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup

###Inheritance
Inheritance in JavaScript works by

NOTE - Always use 'use strict;' at the beginning of a JavaScript file to make the JS interpreter evaluate code strictly.
Credit: http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it

IMPORTANT - Ja

Primitive Types
-Undefined; represents a lack of existence (for the Engine)
-Null; represents a lack of existence (can be used by the programmer)
-Boolean; True or False
-Number; Represented as a floating point number (there's always some decimals). There's only one number type, 
so it makes math weird
-String; a sequence of characters ''/""
-Symbol; Used in ES6

Operator:
A special function that is syntactically (written) different(ly). Generally, operators take two parameters 
and return one result

Notations:
Prefix - + 3, 4
Infix - function name sits in between to two parameter ex 3 + 4
Pofix 3, 4 +

Operator Precedence - see mdn precedence chart

Associativity - What order an operator gets called in (left - to - right/ right - to -left)

Coercion - Converting a value from one type to another. Casting?

IMPORTANT - '==' is subject to Coercion ex false == 0. USE strict equality instead '===' it does not
Coerce the values

IMPORTANT - Trick to give functions a default parameter. Use the || operator as when it has to Coerce two different
values it just return the secound value as it if the first one isn't true.
```JavaScript
function greet(name){
  name = name || '<Your name here>';
  console.log('Hello' + name);
}
```
Object Literal syntax:
{} = new [Object]

```JavaScript
var person = {firstname: 'Tony', lastname: 'Alicea'};

//Versus the long had way of doing it.
person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea";
```
Syntax Parser - A program that reads your code and determines what it does and if its grammar is valid. translates code for cpu
Lexical Environment - Where something fits physically in code the code you write. 
Execution context - A wrapper to help manage the code that is running. ie. There a many lexical environments. Which one is 
currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

Undefined - Is a value given to variables during the creation phase of the execuation context sets the memory allocated
for it it to undefined (not set)

Single threaded - One command is executed at a time
Synchronous - One at a time; and in order

Invocation - Running a function; done by using ()
##CSS3
***
http://learnlayout.com/no-layout.html