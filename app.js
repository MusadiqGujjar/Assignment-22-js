// chapter 12
// IF ELSE & ELSE IF STATEMENT


// var chk = prompt("Write any word or text");

// if (chk >= "0" && chk <= "9"){
//     alert("This is a number")
// }
//  else if (chk >= "A" && chk <= "Z"){
//     alert("This is a capital letter")
//  }
//  else if (chk >= "a" && chk <= "z"){
//     alert("This is a Small letter")
//  }
// else{
//     alert("This is neither a num or a word")
// }


// var num1 = +prompt("first number");
// var num2 = +prompt("Second number");
    
// if (num1 > num2){
//     alert("Number 1 is worse than number 2")
// }
// else if (num1 < num2){
//     alert("Number 1 is smaller than number 2")
// }
// else{
//     alert("Both num are not a same")
// }


// var num = +prompt("Nagative value & Positive value");

// if (num > 0){
//     alert("Positive")
// }
// else if (num < 0 ){
//     alert("Negative")
// }
// else{
//     alert("Zero")
// }


// var chk = prompt("vowel value enter").toLowerCase();

// if (chk.length !== 1){
//     alert("Please Enter a Vowel Value")
// }
// else{
// if (chk === "a" || chk === "e" || chk === "i" || chk === "o" || chk === "u"){
//     alert("true")
// }
// else {
// alert("false")
// }
// }


// var correctPassword = "abc123"
// var userpassword = prompt("Enter your password");
// if(!userpassword){
//     alert("Please Enter a correct Password")
// } 
// else if(correctPassword === userpassword){
//     alert("Your Password Has Been Correct")
// }
// else{
//     alert("Sorry your Password is Incorrect")
// }


// var greeting ;
// var hour = +prompt();

// if (hour < 18){
//     alert("Good Day")
// } else{
//     greeting = "Good Evening"
// }

// var time = +prompt("Enter your time!");
// if (time > 0 && time < 1200){
//     alert("GOOD MORNING!")
// } 
// else if(time > 1200 && time < 1700){
//     alert("Good afternoon bhai den kase guzar rha hai ap ka!")
// } 
// else if(time > 1700 && time < 2100){
//     alert("Good Evening!")
// } 
// else if(time > 2100 && time < 2359){
//     alert("Good night")
// } else{
//     alert("Incorrect Time")
// }


// Chapter 14 & 16 
// ARRAYS

// var firstName = [];


// var fruits = ["Peach", "Mango", "Pine apple", "Orange", "Apple"]
// console.log(fruits)


// var numbers = [10,20,30,40,50,60,70,80,90]
// console.log(numbers)


// var truthValue = [true, false, true, false];
// console.log(truthValue);


// var mixedArray = [20, "Pine apple", 2.1, true, ]
// console.log(mixedArray)

// Question number 07 ?


// var studentName = ["Musadiq", "Sanaullah", "Waqar"];
// var sutdentScore = [400, 450, 500];
// var studentList = document.getElementById("student-list");

// Question number 08 ?


// var city = ["Karachi", "Lahore", "Islamabad", "Queta"];
// var mainCity = city.slice(0, 3)
// console.log(mainCity)


// var array = ["This ", " is ", " my ", " cat"];
// var result = array.join(""); 
// console.log(result)


// var line = [];
// line.push("Musadiq")
// line.push("Sanaullah")
// line.push("Waqar")
// console.log(line)

// line.shift()
// console.log(line)