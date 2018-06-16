// console.log('javascript is not the same as java')
// ---------------------
// weekend-js-1 (06-15-18 -- 06-17-18)
// ---------------------
// Conceptual Questions

// Long_Weekend covering loops, functions, and datatypes

// 1. How do we assign a value to a variable?
// 2. How do we change the value of a variable?
// 3. How do we assign an existing variable to a new variable?




// -------------
//    Strings
// -------------
// 1. Create a variable called firstVariable.

// • assign it the value of a string => "Hello World"

// • change the value of this variable to a number.

// • store the value of firstVariable into a new variable called 
// secondVariable
// --> completed thus far <--
// • change the value of secondVariable to a string.

// • What is the value of firstVariable?

// 2. Create a variable called yourName and set it equal to your name as a string.

// • Write an expression that takes the string "Hello, my name is " 
// and the variable yourName so that it returns a new string with 
// them concatenated.

// • ex: Hello, my name is Jean Valjean


// let firstVariable = 'hello world'

//   firstVariable = 5;

//   // console.log(firstVariable);

//   secondVariable = firstVariable;

// console.log(secondVariable);

// secondVariable = "hello washington"

// console.log(firstVariable);
//  --------------------------------------------------
//       The Value of the firt variable is 5.

//  --------------------------------------------------
//  const yourName = "Jared"
//   console.log('Hello, my name is ' + yourName + "!");

// -------------
//  Booleans
// -------------

// • Using the provided variable definitions, 
// replace the blanks with a mathematical or boolean operator 
// that evaluates the expression to true. 

//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

// a < b;
// c > d;
// 'Name' === 'Name';
// a + b === c;
// a + a != d;
// e != 'Kevin';
// 48 == '48';

// -----------
//  The Farm
// -----------

// 1• Write code that will print out "mooooo" if the variable 
//   animal is equal to cow.

// 2• Change your code so that if the variable animal 
//   is anything other than a cow, your should print out 
//   "Hey! You're not a cow."


// const animal = 'bird';

//   if ('cow' == animal){
//     console.log('mooooo');
//   } else {
//     console.log('Hey! Youre not a cow!');
//   }

// --------------------
//    Driver's Ed
// --------------------

// 1. Write a variable that will hold a person's age.

// 2. Write code that will print out "Here are the keys", 
//    if the age is 16 years or older.

// 3. Change your code so that if the age is younger than 16, 
//    a message will print "Sorry, you're too young."

// const oldEnough = (age) => {
//   if (age >= 16){
//     console.log("Here are the keys");
//     } else 
//     console.log("Sorry, you're too young");
// }
// oldEnough(10)
// oldEnough(18)

// ---------------------------------
          // Just Loop It
// ---------------------------------
// 1. Write code that will print out all 
//    the numbers in the range 0 - 10.

// 2. Write code that will print out all 
//    the numbers in the range 10 - 4000.

// 3. Write code that will print out every 
//    other number in the range 10 - 4000.
// ======================================
// 
// // Notes line 145:if i++ here would only get total number print out, 
// //not individual. i += 0 allows counting up each 
// //number with the below code combined.

// 1.
// Notes line 147: with out this line here, would be infinite loop. 
// Also would not print out each number.
//=================================
for (i = 0; i <= 10; i += 0){ 
  console.log(i);
  i++ 
}
//=================================
// 2.
// a.) i sets where we start from b.) where we count towards c.) the rate at which we will move by (+ 0 = moving normal 1 count at a time).
//=================================
for (i = 10; i <= 4000; i += 0){
  console.log(i);
  i++
}
//==================================
// 3. i += 1 will make the count skip a number as it counts. (count+1)
//===================================
for (i = 10; i <= 4000; i += 1){
  console.log(i);
  i++
}
//===================================































