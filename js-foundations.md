# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### From memory, answer the following:

1. What's the difference between =, ==, and === in JavaScript?

"=" = true or a variable, "==" is to check if it is equal to or not "equality?"
"==="" is indefinetely has to be equal too and a string

2. What is the difference between an array's index and length?

an array's length is the whole array's index plus 1 and the index is the location of a number or of arguments returning a number.

3. What is a function's declaration, argument, and call?

I believe the function declaration is called (parameters)? and argument is in parentheses where you call the function. Is also a place-holder.
calling is refering back to what your function is attached too.

4. What are the three main steps in saving work to github?

git add .
git commit-m "fill"
git push


5. What is an object?

 Regularely in a class also defined as a method or something else...

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

  it will show the 1st console log answer: outside

1b. Test the function. Explain why the function returned what it did.

  Your answer:outside

  Researched answer: undefined (should have declared all of your variables at the top of a scope block.)
  
  var text                  // hoisted to top of scope; text is undefined
  text = 'outside'          // text is now assigned in place
  logIt = function () {
  var text;                 // hoisted to top of scope; text is undefined
  console.log(text);        // spits out undefined
  text = 'inside';          // text is now assigned in place.
}
logIt();


2. What is JSON? How does it relate to javascript objects?

  Your answer:helps transfer info from your computer to the server and back around

  Researched answer:JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.


3. What does CRUD stand for?

  Your answer:Create, Read, Update, Delete

  Researched answer: CRUD stands for Create, Read, Update and Delete. (Retrieve may occasionally be substituted for Read.) These functions are also descriptive of the data life cycle.


4. What is a higher-order function?

  Your answer: A function inside of a function that can also return a function? inception of functions???

  Researched answer: A higher-order function is a function that can take another function as an argument, or that returns a function as a result.


5. Stretch: What is a closure, what is it good for and how do you recognize one?

  Your answer: closure is when you and your ex accept that your relationship is over and you both feel a sense of resolution.
  
  im honestly not sure xD

  Researched answer: A closure gives you access to an outer function's scope from an inner function.In JavaScript, closures are created every time a function is created, at function creation time. ... The inner function will have access to the variables in the outer function scope, even after the outer function has returned.


6. Stretch: What is an API?

  Your answer:application program intelligence or interface (i think)? Used to store information

  Researched answer:An application programming interface (API), in the context of Java, is a collection of prewritten packages, classes, and interfaces with their respective methods, fields and constructors.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

  What you did over the weekend? or if they dont want to disclose that then what is your favorite past time?


2. What was your favorite topic this week?

Classes and learning React. Preferebly the Lightswitch Challenge.

3. What was your "A-ha!" moment this week?

During the pig-latin Sebastian and I found out what we were doing wrong and it was a huge A-ha! moment for both of us.
