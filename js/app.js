// console.log('javascript is not the same as java')
// //****************************************
// // tip: Control L will reset your console
// //****************************************
// //tip: option 8 makes bullit points
// //****************************************
// // ---------------------
// // weekend-js-1 (06-15-18 -- 06-17-18)
// // ---------------------
// //Conceptual Questions

// //Long_Weekend covering loops, functions, and datatypes

// //1. How do we assign a value to a variable?
// //2. How do we change the value of a variable?
// //3. How do we assign an existing variable to a new variable?




// //-------------
//    Strings
// //-------------
// //1. Create a variable called firstVariable.

// //• assign it the value of a string => "Hello World"

// //• change the value of this variable to a number.

// //• store the value of firstVariable into a new variable called 
// //secondVariable

// //• change the value of secondVariable to a string.

// //• What is the value of firstVariable?

// //2. Create a variable called yourName and set it equal to your name as a string.

// //• Write an expression that takes the string "Hello, my name is " 
// //and the variable yourName so that it returns a new string with 
// //them concatenated.

// //• ex: Hello, my name is Jean Valjean


// let firstVariable = 'hello world'

//   firstVariable = 5;

//   // console.log(firstVariable);

//   secondVariable = firstVariable;

// console.log(secondVariable);

// secondVariable = "hello washington"

// console.log(firstVariable);
// //--------------------------------------------------
// //      The Value of the firt variable is 5.

//  //--------------------------------------------------
//  const yourName = "Jared"
//   console.log('Hello, my name is ' + yourName + "!");



// //-------------
// //Booleans
// //-------------

// //• Using the provided variable definitions, 
// //  replace the blanks with a mathematical or boolean operator 
// //  that evaluates the expression to true. 

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



// //-----------
// // The Farm
// //-----------

// //1• Write code that will print out "mooooo" if the variable 
// //   animal is equal to cow.

// //2• Change your code so that if the variable animal 
// //   is anything other than a cow, your should print out 
// //   "Hey! You're not a cow."


// const animal = 'bird';

//   if ('cow' == animal){
//     console.log('mooooo');
//   } else {
//     console.log('Hey! Youre not a cow!');
//   }



// // --------------------
// //   Driver's Ed
// //--------------------

// //1. Write a variable that will hold a person's age.

// //2. Write code that will print out "Here are the keys", 
// //   if the age is 16 years or older.

// //3. Change your code so that if the age is younger than 16, 
// //   a message will print "Sorry, you're too young."

// const oldEnough = (age) => {
//   if (age >= 16){
//     console.log("Here are the keys");
//     } else 
//     console.log("Sorry, you're too young");
// }
// oldEnough(10)
// oldEnough(18)



// //---------------------------------
   //       // Just Loop It
// //---------------------------------
// //1. Write code that will print out all 
// //   the numbers in the range 0 - 10.

// //2. Write code that will print out all 
// //   the numbers in the range 10 - 4000.

// //3. Write code that will print out every 
// //   other number in the range 10 - 4000.
// //======================================
// 
// // Notes line 145:if i++ here would only get total number print out, 
// //not individual. i += 0 allows counting up each 
// //number with the below code combined.

// // 1.
// // Notes line 147: with out this line here, would be infinite loop. 
// // Also would not print out each number.
// //*********************************************************
// for (i = 0; i <= 10; i += 0){ 
//   console.log(i);
//   i++ 
// }
// //=================================
// // 2.
// // a.) i sets where we start from b.) where we count towards c.) the rate at which we will move by (+ 0 = moving normal 1 count at a time).
// //**********************************************************
// for (i = 10; i <= 4000; i += 0){
//   console.log(i);
//   i++
// }
// //==================================
// // 3. i += 1 will make the count skip a number as it counts. (count+1)
// //*********************************************************
// for (i = 10; i <= 4000; i += 1){
//   console.log(i);
//   i++
// }
// //===================================



// //----------------------------------------------
// //            Let's Get Even
// //----------------------------------------------

// // 1. Print out the even numbers that are within the range of 1 - 100.

// // 2. Adjust your code to add a message next to the 
// //    even number that says: "is an even number".

// // 1.
// for (i = 2; i <= 98; i += 1){
//   console.log(i);
//   i++
// }

// // 2.
// for (i = 2; i <= 98; i += 1){
//   console.log(i + " is an even number");
//   i++
// }



// //--------------------------------------------------
// //           Give me Five
// //--------------------------------------------------

// //1. For the numbers 0 - 100, print out "I found a number. High five!" 
// //   if the number is a multiple of five.
// //• Make numbers count from 0 - 100 && say i found a multiple of 5.
// //2. Add to the code from above to print out "I found a number.
// //   Three is a crowd" if the number is a multiple of three.

// for (i = 0; i <= 100; i += 0){
//   console.log(i);
//   i++
//   if (i % 5 == 0){
//   console.log("I found a " + i + ". High five!")
//     }else if (i % 3 == 0){
//     console.log("I found a " + i + ". Three is a crowd");  
//   }
// }

// //---------------------------------------------------
// //             Saving account
// //---------------------------------------------------

// // 1. Write code that will save the sum of all the numbers 
// //    between 1 - 10 to a variable called bank_account.

// // 2. You got a bonus! Your pay is now doubled each week. 
// //    Write code that will save the sum of all the numbers 
// //    between 1 - 100 multiplied by 2.

// // 1.

//   let bankAccount = 0
//  for (let x = 1; x <= 10; x++){ 
//   bankAccount = bankAccount + x;
// }
// console.log(bankAccount);

// // // 2.

//   let bankAccount2 = 0
//  for (let x = 1; x <= 100; x++){
//   bankAccount2 = bankAccount2 + (x*2);
// }
// console.log(bankAccount2);

// //---------------------------------------------------
// //                Multiples of 3 && 5
// //---------------------------------------------------


// // 1. If we list all the natural numbers below 10 
// //   that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// //   The sum of these multiples is 23.
// //   Find the sum of all the multiples of 3 or 5 below 1000.


// let treeFive = 0
//  for (let x = 1; x < 1000; x++){
//   if (x % 3 === 0 || x % 5 === 0)
//     treeFive += x
// };
// console.log(treeFive);

// //----------------------------------------------------
// //               Easy Does it
// //-----------------------------------------------------

// const quotes = [ 
//   "of all the things i've lost, i miss my mind the most",
//   "life is a garden, dig it",
//   "royal with cheese"
// ];

// //-----------------------------------------------------
// //               Random
// //-----------------------------------------------------
// const randomThings = [1, 10, "Hello", true]

// // //1. how do you access the 1st element in the array?
// console.log(randomThings[0]);

// // //2. Change the value of "Hello" to "World".
// randomThings[2] = "world";
// console.log(randomThings[2]);

// // //3. Check the value of the array to make sure it updated the array.
// console.log(randomThings);

// //-------------------------------------------------------
//                    We've Got Class
// //-------------------------------------------------------
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// //1. What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// //2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat";
console.log(ourClass[2]);

// //3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);

// //------------------------------------------------------
// //                     Mix It Up
// //------------------------------------------------------
const myArray = [5 ,10 ,500, 20]
// //5. using the push method, add the string "Egon" 
// //   to the end of the array.
myArray.push("Egon");
console.log(myArray);

// //6. using a method, remove the string from the end of the array.
myArray.pop();
console.log(myArray);

// // 7. using the unshift method, add the string "Bob Marley" 
// //    to the beginning of the array
myArray.unshift("Bob Marley");
console.log(myArray);

// //8. using a different method, remove the string from 
// //   the beginning of the array
myArray.splice(0, 1);
console.log(myArray);
// //9. use the reverse method on this array
myArray.reverse();
console.log(myArray);

// //-------------------------------------------------------
// //                 Biggie Smalls
// //-------------------------------------------------------












































