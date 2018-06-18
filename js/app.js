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
// // notes: for loop when number of times is defined
// // i++ && i = i + 1 && i += 1 are all the same
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
//  if (x % 3 === 0 || x % 5 === 0)
//  treeFive += x
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
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// // //1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);

// // //2. Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat";
// console.log(ourClass[2]);

// // //3. Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// console.log(ourClass);

// // //------------------------------------------------------
// // //                     Mix It Up
// // //------------------------------------------------------
// const myArray = [5 ,10 ,500, 20]
// // //5. using the push method, add the string "Egon" 
// // //   to the end of the array.
// myArray.push("Egon");
// console.log(myArray);

// //6. using a method, remove the string from the end of the array.
// myArray.pop();
// console.log(myArray);

// // // 7. using the unshift method, add the string "Bob Marley" 
// // //    to the beginning of the array
// myArray.unshift("Bob Marley");
// console.log(myArray);

// // //8. using a different method, remove the string from 
// // //   the beginning of the array
// myArray.splice(0, 1);
// console.log(myArray);
// // //9. use the reverse method on this array
// myArray.reverse();
// console.log(myArray);

// //-------------------------------------------------------
// //                 Biggie Smalls
// //-------------------------------------------------------
// // • Write an if..else statement:

// //1. console.log little number if the number is 
// //   entered is less than 100

// //2. If the number entered is 100 or more, alert big number.

  // for (let i = 0; i < 200; i++){
  //   let i = 1000;
  //   if (i < 100){
  //   console.log("Puny little number")
  //   } else
  //   console.log("winner winner big winner...Huge!")
  //   }

// //-----------------------------------------------------
// //                 Monkey in the Middle
// //-----------------------------------------------------

// //• Write an if...else if...else statement:

// //1. console.log little number if the number entered 
// //   is less than 5.

// //2. If the number entered is more than 10, log big number.

// //3. Otherwise, console.log "monkey". 


  // for (let i = 0; i < 200; i++){
  //   let i = 11;
  //   if (i < 5){
  //   console.log("Puny little number")
  //   } else if (i > 10) {
  //   console.log("winner winner big winner...Huge!")
  //   } else (console.log("Monkey Bone"))
  // }

// //----------------------------------------------------
// //               What's in Your Closet?
// //----------------------------------------------------
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // //1. What's Kristyn wearing today? Using bracket notation to 
// // //access items in kristynsCloset, log the sentence 
// // "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");


// // //2. Kristyn can't find her left shoe. Remove this item 
// // from her closet and save it to a variable named kristynShoe.
// const kristynShoe = kristynsCloset.shift()
// console.log(kristynsCloset);
// console.log(kristynShoe);

// // //3. Kristyn just bought some sweet shades! Add "raybans" to 
// // //   her closet after "yellow knit hat".
// kristynsCloset.splice(5, 0, "raybans");
// console.log(kristynsCloset);

// // //4. Kristyn spilled coffee on her hat... modify this 
// // //  item to read "stained knit hat" instead of yellow.
// kristynsCloset[4] = "stained knit hat";
// console.log(kristynsCloset);

// // //5. Put together an outfit for Thom! Using bracket 
// // // notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);

// // //6. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);

// // //7. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2])

// // //8. Log a sentence about what Thom's wearing. Example: 
// // //"Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is looking fierce in a "+thomsCloset[0][0] +" "+thomsCloset[1][1]+" & "+thomsCloset[2][0]+"!")

// // //9. Get more specific about what kind of PJs Thom's wearing 
// // // this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[2][2] = "Footie Pajamas";
// console.log(thomsCloset[2][2])



// //--------------------------------------------------------------------
// //                     Functions
// //------------------------------------------------------------------
// //                    printGreeting
// //--------------------------------------------------------------------
// //Write a function called printGreeting with a parameter name that 
// //returns a greeting with the argument interpolated into the greeting.
// const name = 'Slimer';
// const printGreeting = (name) => {
//   return name;
// }
// console.log(`Hello there, ${name}!`);


// //-----------------------------------------------------
// //                 reverseWordOrder
// //-----------------------------------------------------
// //Write a function reverseWordOrder that accepts a single argument, 
// //a string. The function should return a string with the order of 
// //the words reversed. Don't worry about punctuation.

// const reverseWordOrder = (string) => {
//   const splitString = string.split(" ");
//   // console.log(splitString);
//   const reverseArray = splitString.reverse();
//   // console.log(reverseArray);
//   const joinArray = reverseArray.join(" ");
//   return joinArray;
// }
// console.log(reverseWordOrder("i'm into fitness... fitness whole pizza into my mouth"));


// //---------------------------------------------------------
// //                    calculate
// //---------------------------------------------------------
// //Write a function called calculate.

// //This function should take three arguments, 
// //two numbers and a string.

// //Name the parameters num1, num2, and operation.

// //If the function receives the string "add" for the 
// //operation parameter, it will return the sum of num1 and num2.

// //If the function receives the string "sub" for the 
// //operation parameter, it will return num1 minus num2.

// //Do the same thing for multiplication "mult", division 
// //"div", and exponent "exp" (where num2 is the exponent of num1).


// const calculate = (num1, num2, operation) => {
//   if(operation === "add"){
//     return (num1 + num2);
//   } else if (operation === "sub"){
//     return (num1 - num2);
//   }else if (operation === "mult"){
//     return (num1 * num2);
//     }else if (operation === "div"){
//     return (num1 % num2);
//     }else 
//     return (Math.pow(num1, num2));
// }
// console.log(calculate(4, 3, "add"));
// console.log(calculate(4, 3, "sub"));
// console.log(calculate(40, 3, "mult"));
// console.log(calculate(40, 5, "div"));
// console.log(calculate(4, 3, "exp"));



// //------------------------------------------------------
// //                --- 1 ---
// //------------------------------------------------------
// //Write a function printCool that accepts one parameter, 
// //name as an argument. The function should print the name 
// //and a message saying that that person is cool.

// const printCool = (name, sentence) => {
//   name = "Captain Reynolds"
//   sentence = " is cool!";
//   return (name + sentence);
// }
// console.log(printCool());

// //------------------------------------------------------
// //               --- 2 ---
// //------------------------------------------------------
//Write a function calculateCube that takes a single number 
//and prints the volume of a cube made from that number.


// Volume === legth * width * height (all are the same dimensions)

// const calculateCube = (cubeVolume) => {
//     const i = 5;
//     return (i * i * i);
// }
// console.log(calculateCube());
// //------------------------------------------------------
// //               --- 3 ---
// //------------------------------------------------------
// //Write a function isAVowel that takes a character 
// //(i.e. a string of length 1) and returns true if it is a vowel, 
// //false otherwise. The vowel could be upper or lower case.

// const isAVowel = (character) => {
//   let i = character;
//   if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'y'){
//     return true;
//   } else if (i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U' || i == 'Y'){
//     return true;
//   } else 
//     return false;
// }
// console.log(isAVowel('S'));
// console.log(isAVowel('i'));
// console.log(isAVowel('A'));

// //------------------------------------------------------
// //               --- 4 ---
// //------------------------------------------------------
// //
// //Write a function getTwoLengths that accepts two parameters 
// //(strings). The function should return an array of numbers 
// //where each number is the length of the corresponding string.

// const getTwoLengths = (string1, string2) => {
//   //return array of numbers
//       const a = string1.length;
//       const b = string2.length;
// //      // console.log(string1.length);
// //      // console.log(string2.length);
//       const arr = [a, b];
// //      // console.log(arr);
//       return arr
//   }
// console.log(getTwoLengths('dude', 'sweet'));
// console.log(getTwoLengths("Hank", "Hippopopalous"));


// //------------------------------------------------------
// //               --- 5 ---
// //------------------------------------------------------
// //Write a function getMultipleLengths that accepts a single
// //parameter as an argument: an array of strings. The function 
// //should return an array of numbers where each number is the 
// //length of the corresponding string.

// const getMultipleLengths = (arr) => {
//       // array length
//       const stringLength = [];
//       for (i = 0; i < arr.length; i++){
//        // console.log(arr[i].length);
//       stringLength[i] = arr[i].length;
//       }
//       return stringLength

// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// // **-----> come back and combine into one array <--------***
// // -> Problem fixed -> keep const and let outside of for loop***
// // Remember to return something

// //------------------------------------------------------
// //               --- 6 ---
// //------------------------------------------------------
// //Define a function maxOfThree that takes three numbers as arguments
// //and returns the largest of them. If all numbers are the same,
// //it doesn't matter which one is returned. If the two largest 
// //numbers are the same, one of them should be returned.

// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3);
//   if (num1 == num2 || num1 == num3){
//     return num1;
//   } else if (num2 == num3)
//     return num3;
// }
// console.log(maxOfThree(6, 9, 1));
// console.log(maxOfThree(8, 8, 1));
// console.log(maxOfThree(6, 7, 7));
// console.log(maxOfThree(6, 5, 6));
// console.log(maxOfThree(5, 5, 5));



// //------------------------------------------------------
// //               --- 7 ---
// //------------------------------------------------------
// //Write a function printLongestWord that accepts a single argument, 
// //an array of strings. The method should return the longest 
// //word in the array. In case of a tie, the method should 
// //return the word that appears first in the array.

const printLongestWord = (arrString) => {
      //Edge Case: empty array
      if(arrString.length === 0){
        console.error("empty array");
        return;
      }
      let longestWordSoFar = arrString[0];
  // we are going to scan through the array, store in variable above
      for (let i = 0; i < arrString.length; i++){
        const thisWord = arrString[i];
        if(thisWord.length > longestWordSoFar.length){
          longestWordSoFar = thisWord;
        //if this word is longer than the word we think is the longest
        }
      }
      return longestWordSoFar
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// //-----> COME BACK IF STATMENTS <---**


// //------------------------------------------------------
// //               --- 8 ---
// //------------------------------------------------------
// //Write a Javascript function called transmogrify. This 
// //function should accept three arguments, which you can assume 
// //will be numbers. Your function should return the "transmogrified" result.

// //The transmogrified result of three numbers is the product of 
// //the first two numbers, raised to the power of the third number.

// //For example, the transmogrified result of 5, 3, and 2 is 
// //(5 times 3) to the power of 2 is 225.

// const transmogrify = (num1, num2, num3) => {

  
// }




























