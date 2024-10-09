// // ==================// Assignment # 1====================
// // =================// JAVASCRIPT===========================
// // ================// ALERTS!===========================

// alert("Welcome to Js land")
// alert("prevent this page from creating additional dialogs.")
// alert("Welcome to Js land\n Happy Coding!")
// console.log("this is in console")

// // ==================// Assignment # 1====================
// // =================// JAVASCRIPT===========================
// // ================// End===========================

// // ==================// Assignment # 2====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLES FOR STRINGS!===========================

// var fullName = "Muhammad Suhaib";
// var age = "19 year old";
// var passion = "web developer";
// var lineBreake = "Pizza\nPizz\nPiz\nPi";
// var email = "suhaib1514@gmail.com";
// var book = "A smarter way to learn JavaScript";
// var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// alert(fullName);
// alert(age);
// alert(passion);
// alert(lineBreake);
// alert(email);
// alert(book)
// alert(symbol)
// document.write("<p>I cane write html throug javascript.</p> <br>")

// // ==================// Assignment # 2====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLES FOR STRINGS!===========================
// // ===============// End===========================

// // ==================// Assignment # 3====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLES FOR NUMBERS!===========================
// // ===============// start===========================

// var birthYear = 2005;
// var visitorName = "Muhammad Suhaib";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(" My birth year is: " + birthYear + "<br><br>");

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on xyz clothing store.<br>");

// // ==================// Assignment # 3====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLES FOR NUMBERS!===========================
// // ===============// End===========================


// // ==================// Assignment # 4====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLE NAMES: LEGAL & ILLEGAL!===========================
// // ===============// start===========================



// // 1. Declare 3 variables in one statement
// var x = 1, y = 2, z = "hello";
// alert(x)
// alert(y)
// alert(z)

// // 2. Declare 5 legal & 5 illegal variable 

// // Legal variable names
// var myVar;
// var $myVar;
// var _myVar;
// var myVar1;
// var my_Var;

// // Illegal variable names
// // var 1myVar; // Starts with a number
// // var my-Var; // Contains a hyphen
// // var my Var; // Contains a space
// // var myVar&; // Contains an invalid character
// // var myVar!; // Contains an invalid character

// // 3. Display the rules in the browser
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
// document.write("<p>Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");

// // ==================// Assignment # 4====================
// // =================// JAVASCRIPT===========================
// // ================// MATH EXPRESSIONS===========================
// // ================// End===========================




// // ================// Assignment # 5====================
// // ===============// JAVASCRIPT===========================
// // ==============// VARIABLE NAMES: LEGAL & ILLEGAL!===========================
// // =============// start===========================

// var sum1 = 3;
// var sum2 = 5;
// var sum = sum1 + sum2;
// document.write(" Sum of " + sum1 + " and " + sum2 + " is : " + sum + "<br>");

// var sub1 = 3;
// var sub2 = 5;
// var sub = sub1 - sub2;
// document.write(" Subtraction of " + sub1 + " and " + sub2 + " is : " + sub + "<br>");

// var multi1 = 3;
// var multi2 = 5;
// var multi = multi1 * multi2;
// document.write(" Multiplicatoin of " + multi1 + " and " + multi2 + " is : " + multi + "<br>");

// var divi1 = 15;
// var divi2 = 5;
// var divi = divi1 / divi2;
// document.write(" Division of " + divi2 + " and " + divi1 + " is : " + divi + "<br>");

// document.write(" <h1>Table Of  4</h1>");
// // console.log (typeof y)

// var number = prompt("Table of ",number);

// document.write(
//     "<h1>" + "Table of " + number + "</h1>" +"<br>"+
//     number + " " + " * 1 = " + (number*1) + "<br>" +
//     number + " " + " * 2 = " + (number*2) + "<br>" +
//     number + " " + " * 3 = " + (number*3) + "<br>" +
//     number + " " + " * 4 = " + (number*4) + "<br>" +
//     number + " " + " * 5 = " + (number*5) + "<br>" +
//     number + " " + " * 6 = " + (number*6) + "<br>" +
//     number + " " + " * 7 = " + (number*7) + "<br>" +
//     number + " " + " * 8 = " + (number*8) + "<br>" +
//     number + " " + " * 9 = " + (number*9) + "<br>" +
//     number + " " + " * 10 = "+ (number*10) + "<br>" 
// )






// // ==================// Assignment # 5====================
// // ===============// JAVASCRIPT===========================
// // ===============// end===========================

// // ==================// Assignment # 6====================
// // ===============// JAVASCRIPT===========================
// // ===============// ===========================
// // ===============// start===========================


// var subject1 = ("English");
// var obtainMarks1 = (100);
// var subject2 = ("Math");
// var obtainMarks2 =(54);
// var subject3 = ("Urdu");
// var obtainMarks3 = (98);
// var totalMarks = (100);
// var per1 = obtainMarks1 / 100 * 100
// var per2 = obtainMarks2 / 100 * 100
// var per3 = obtainMarks3 / 100 * 100

// var totalObtainedMarks = obtainMarks1 + obtainMarks2 + obtainMarks3;
// var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainMarks1 + "</td><td>" + per1.toFixed(2) + "%" + "</td></tr>" );
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainMarks2 + "</td><td>" + per2.toFixed(2) + "%" + "</td></tr>" );
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainMarks3 + "</td><td>" + per3.toFixed(2)+ "%" + "</td></tr>" );
// document.write("<tr><td>" + "" + "</td><td>" + (3 * totalMarks) + "</td><td>" + totalObtainedMarks + "</td><td>" + totalPercentage.toFixed(2)+  "%" + "</td></tr>") 
// document.write("</table>");


// var gender = prompt("Enter Your Gender");
// var message = "Not matched";

// if(gender === "Female"){
//     message = "Hello Miss";

// }
// if(gender === "Male"){
//     message = "Hello Sir";
// }
// alert(message)

// var city = prompt("Enter YOur City Name")
// var message = "Enter Capitalize text"
// if(city === "Karachi"){
//     message = "“Welcome to city of lights”";
// }
// if(city === "Islamabad"){
//     message = "“Welcome to city of borger”";
// }
// if(city === "Punjab"){
//     message = "“Welcome to city of Fraud”";
// }
// alert(message)

// var signal = prompt("Enter Signal Color for output");
// var message = "Enter These Color For Output red,yellow,green";
// if(signal === "red"){
//     message = "Must Stop"
// };
// if(signal === "yellow"){
//     message = "ready to go"
// };
// if(signal === "green"){
//     message = "go..."
// };
// alert(message);

// var remaining = prompt("enter remaining fuel in liter","1")
// var message = "write left fuel in your car"

// if(remaining === "0.25"){
//     message = "Please refill the fuel in your car"
// }
// if(remaining === "10"){
//     message = "Good"
// }
// alert(message)


// var lang = prompt("Enter lang")
// if (lang.toLowerCase() === "java") {
//     var city = prompt("Enter location")
//     if (city.toLowerCase() === "karachi") {
//         var yourExp = prompt("Enter exp")
//         if (yourExp >= 2) {
//             console.log("Hired")
//         } else {
//             console.log("exp ho to phir ana 2sal ka")
//         }
//     } else {
//         console.log("Karachi aja")
//     }
// } else {
//     console.log("Java sikho")
// }
// var lang = prompt("Enter lang")
// var city = prompt("Enter location")
// var yourExp = prompt("Enter exp")

// if ( lang.toLowerCase() === "java" && city.toLowerCase() === "karachi" && yourExp.toLowerCase() >= 2){
//     console.log("Hired good job")
// }else{
//     console.log("Read requirment")
// }

// var gender = prompt("Enter your gender")
// var message = "enter...."
// if (gender === "Male"){
//     message = "Hello sir"
// }

// alert(message)


// let arr = ["Ibrahim","uzair","asad","siraj","hasan","abdulrehman","abuhurera","ali","saqib","talha",]
// arr[10]="hen";
// arr.pop();
// arr.pop();
// arr.push("Ibrahim");
// arr.shift();
// arr.unshift("Uzbek");
// arr.splice(3);
// console.log(arr);




// document.write(
//     "<h1>" + "Table of " + number + "</h1>" +"<br>"+
//     number + " " + " * 1 = " + (number*1) + "<br>" +
//     number + " " + " * 2 = " + (number*2) + "<br>" +
//     number + " " + " * 3 = " + (number*3) + "<br>" +
//     number + " " + " * 4 = " + (number*4) + "<br>" +
//     number + " " + " * 5 = " + (number*5) + "<br>" +
//     number + " " + " * 6 = " + (number*6) + "<br>" +
//     number + " " + " * 7 = " + (number*7) + "<br>" +
//     number + " " + " * 8 = " + (number*8) + "<br>" +
//     number + " " + " * 9 = " + (number*9) + "<br>" +
//     number + " " + " * 10 = "+ (number*10) + "<br>" 
// )

// var loopTest = prompt("Enter num");

// for(var i = 1 ; i <=10 ; i++){
//     document.write(
//         loopTest + " " + " * " + i + " = " + (loopTest*i) + "<br>"
//     )
// }

// ----------------------------------------------------------------------------------------------------------------------

//! chapter 12-13
// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS 


// let userInput = prompt("Enter Any number or Alphabet only one character ");
// // let userInput = "";
// let char = userInput.charCodeAt(0)
// console.log(char);


// if (char >= 48 && char <= 57) {
//     console.log("this character is Number")
// } else if (char >= 65 && char <= 90) {
//     console.log("This us uppercase");
// } else if (char >= 97 && char <= 122) {
//     console.log("This us lower case");
// }else {
//     console.log("The character is neither a number nor a letter.");
// }


// next question

// var userInput = prompt("Enter Two integer");
// var seprate = userInput.split(" ");

// var num1 = Number(seprate[0]);
// var num2 = Number(seprate[1]);

// if (num1 > num2) {
//     console.log(num1 + " This  is big integer num1");
// } else if (num2 > num1) {
//     console.log(num2 + " This  is big integer num2");
// } else {
//     console.log(" This  is equal integer");
// }


// next question


// var userInput = +prompt("Enter your number i will tell this is posi or negi or zero")
// if (userInput < 0){
//     console.log("This is Negative number");
    
// }
// else if (userInput > 0){
//     console.log("This is positive number");
    
// }
// if (userInput === 0){
//     console.log("This is zero number");    
// }

// next question

// var userInput = prompt("Enter one alphbet").toLowerCase;

// if(userInput === "a"){
//     console.log("This is vowel");
// }
// else if(userInput === "e"){
//     console.log("This is vowel");
// }
// else if(userInput === "i"){
//     console.log("This is vowel");
// }
// else if(userInput === "o"){
//     console.log("This is vowel");
// }
// else if(userInput === "u"){
//     console.log("This is vowel");
// }else{
//     console.log("This is not vowel");
    
// }


//  next question

// var user = prompt("enter your password");
// var password = "123";
// if (user === password){
//     console.log("your passsword is correct");
// }else if (user === ""){
//     console.log("enter your password");
// }else if (user != password){
//     console.log("Incorrect password");
    
// }

// nex question 


// var greeting;
// var hour = 13;
// if (hour < 18) {
// console.log(greeting = "Good day");
// }else{
// console.log(greeting = "Good evening");
// }


// nex question 

// var time = prompt("Enter time ");

// if (time >= 0 && time <1200){
//     console.log("Good Morning");
// }
// else if (time >= 1200 && time <1700){
//     console.log("Good afternoon");
// }
// else if (time >= 1700 && time <2100){
//     console.log("Good Evening");
// }
// else if (time >= 0 && time <1200){
//     console.log("Good Morning");
// }
// else if (time >= 2100 && time <2359){
//     console.log("Good Night");
// }


// ----------------------------------------------------------------------------------------------------------------
// Assignment # 13-15
// JAVASCRIPT
// ARRAYS

// nex question 

// var stNames = [];

// nex question 

//  var stNames = {
//     names:[]
//  }


// nex question 

// var stringArray = [""]; 


// nex question 

// var numberArray = [1 , 12 , 2112]



// nex question 

// var booleanArray = [true , false]

// next question 

// var mixedArray = [true , false , 12 , "Suahib"]

// next question 
// var qualificationPakistan = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]


// next question 

// var studentName = ["Suhaib" , "Ibrahim" , "Uzair"];
// var score1 = 320;
// var score3 = 230;
// var score2 = 480;

// var per1 = (score1*100)/500;
// var per2 = (score2*100)/500;
// var per3 = (score3*100)/500;

// document.write(
//     " score of " , studentName.slice(0,1) , " " , score1 + "." , " Percentage " , per1 , "<br>",
// " score of " , studentName.slice(1,2) , " " + score2 , "." , " Percentage " , per2, "<br>",
// " score of " , studentName.slice(2) , " " , score3 + "." , " Percentage " , per3
// );


// next question 
 

// var scOfStudent = [320,230,480,120];
// scOfStudent.sort();
// console.log(scOfStudent);



// next question 

// var cityList = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var slectedCity = cityList.slice(2,4);
// console.log(slectedCity);



// next question 

// var arr = ["This "," is "," my "," cat"];
// var joined = arr.join("");
// console.log(joined);

// next Question

// var fifoAndLifo = [];
// // var lifo = [];

// fifoAndLifo.push("Keyboard")
// fifoAndLifo.push("Mouse")
// fifoAndLifo.push("Printer")
// fifoAndLifo.push("Moniter")
// console.log(fifoAndLifo);
// console.log("fifo",fifoAndLifo.shift());
// console.log("fifo",fifoAndLifo.shift());
// console.log("fifo",fifoAndLifo.shift());
// console.log("fifo",fifoAndLifo.shift());
// // lifo
// fifoAndLifo.push("Keyboard")
// fifoAndLifo.push("Mouse")
// fifoAndLifo.push("Printer")
// fifoAndLifo.push("Moniter")
// console.log("lifo",fifoAndLifo.pop());
// console.log("lifo",fifoAndLifo.pop());
// console.log("lifo",fifoAndLifo.pop());
// console.log("lifo",fifoAndLifo.pop());

// ===================================================================================================================
// ----------------------------------------------------------------------------------------------------------------
// ===============================================================================================================


// ARRAYS AND LOOP 
// Assignment # 17-20
// JAVASCRIPT

// next Question
// var multiDimentional = [ [0,1,2,3] , [1,0,1,2]  ,[2,1,0,1]]
// console.log(multiDimentional);


// next Question

// for (let i = 0; i <=10; i++) {
//     console.log(i); 
// }



// next Question

// var tableOf = prompt("TableOf");
// var len = prompt("Length")

// for(var i = 1 ; i <= len ; i ++){
//     console.log(tableOf + " " + " x " + i + " = " + (tableOf*i));
    
// }


// next Question

// var fruits = ["apple","mango","banana","orange","strawberry"]

// for ( i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i]);
// }


// next Question

// for (var i = 0; i <=15; i++) {
//     console.log(i);
// }
// var counting = ["1","2","3","4","5","6","7","8","9","10"]

// for(var i = counting.length -0; i >=0; i--){
//     console.log("reverse",counting[i]);
// }


// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0){
//         console.log("even",[i]);
//         }
        
// }


// for (let i = 1; i <20; i++) {
//     if (i % 2 !== 0){
//     console.log("Odd",[i]);
//     }
    
// }



// next Question
 

// var series = [];

// for (let i = 1; i <= 10; i++) {
//     var value = i*2;
//     series += value + "K"
//     if (i < 10){
//         series += ","
//     }
// }

// console.log(series);

// next Question

// var inPut = prompt("Enter bakrey item name !").toLowerCase();
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = false ;

// for (var i = 0; i < a.length; i++) {
//         if(inPut == a[i]){
//             console.log(inPut + `is avaible on index ${i} in our bakery`);    
//             flag = true;
//         }
// }
// if (!flag){
//     console.log(`we are sorry ${inPut} is not avaible in our bakery `);
    
// }


// next Question
// var user = +prompt("enter number")
// var numbers = [24,53,78,91,12]
// var max = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max ){
//         max = numbers[i]  
//     }
// }
  
// console.log("The largest number is " + max);

// next Question

// var numbers = [24,53,78,91,12]
// var min = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min ){
//         min = numbers[i]  
//     }
// }
  
// console.log("The largest number is " + min);





// next Question

// var tableOf = prompt("TableOf");
// var len = prompt("Length")

// for(var i = 1 ; i <= 20 ; i ++){
//     console.log(5 + " " + " x " + i + " = " + (5*i));
    
// }



// gpt looop


for (let i = 1; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz"); 
    }else if( i%3===0){
        console.log("Fizz");
        
    }else if (i % 5 === 0) {
        console.log("Buzz");
        
    }else{
        console.log(i);
        
    }
}




























// if (inPut === a[0]){
//     console.log(a[0] + `is avaible on index ${i} in our bakery`);  
// }
// else if (inPut === a[1]){
//     console.log(a[1]+" is avaible on index 1 in our bakery");
// }















// var userInput = prompt("Enter your input").toLowerCase();
// // var userInput = ["Suhaib"];
// var vowel = ["a","e","i","o","u"];
// // var vowel = ["aeiou"];
// var notFound = false;

// for (let i = 0; i < userInput.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//         if (userInput[i] == vowel[j]) {
//             console.log("It contain vowel " + userInput[i]);  
//             notFound=true 
            
//         }
//     }
       
// }

// if (!notFound){
//     console.log("vowel not found");
    
// }
// if (userInput == vowel){
//     console.log("It contain vowel");
    
// } else{
//     console.log("not contain vowel");
    
// }





// var user = prompt("userInput").toLocaleLowerCase()
// var vowels = "aeiou"
// // var str = [];

// for (let i = 0; i < user.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if(user[i] == vowels[j]){
            
//             console.log("match word is " , user[i])
//             // str.push(user[i])
//         }
        
//     }

// }
// console.log("str" , str)









// !!Practicing with loop

// var userInput = prompt("Enter Any number or Alphabet");
// // let userInput ="S";

// // var char = userInput.charCodeAt(i);

// for (i = 0; i < userInput.length; i++) {

//     let char = userInput.charCodeAt(i);
//     if (char >= 48 && char <= 57) {
//         console.log(userInput[i] + " This character is Number")
//     } else if (char >= 65 && char <= 90) {
//         console.log(userInput[i] + " This is uppercase");
//     } else if (char >= 97 && char <= 122) {
//         console.log(userInput[i] + " This is lower case");
//     } else {
//         console.log(userInput[i] + " The character is neither a number nor a letter.");
//     }

// }



