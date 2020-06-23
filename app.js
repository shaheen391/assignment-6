//chapter# 21-25

//task 1:
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge=firstName+" "+lastName;
// alert("welcome "+merge+" in our website");

//task 2:
// var phoneName=prompt("Entre your fovourite mobile phone with model..");;
// var leng=phoneName.length;
// document.write("<h2>My favourite Phone is: "+phoneName+"<br>Length of string: "+leng+"</h3>");

//task 3:
// var citizen="pakistani";
// var citizenIndex =citizen.IndexOf("n");
// document.write("<h3>String: "+citizen+"<br>Index of 'n': "+citizenIndex+"</h3>");

//task 4:
// var greet="Hello World!";
// var greetIndex =greet.lastIndexOf("l");
// document.write("<h3>String: "+greet+"<br>Last Index of 'l': "+greetIndex+"</h3>");

//task 5:
// var citizen="pakistani";
// var citizenIndex =citizen.slice(3,4);
// document.write("<h3>String: "+citizen+"<br>Character at index 3: "+citizenIndex+"</h3>");

//task 6: 
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge= firstName.concat(lastName);
// document.write("welcome "+merge+" in our website");

//task 7:
// var city="Hyderabad";
// var cityIndex=city.splice("Hyder");
// var replacingTxt="Islam";
// var remainingTxt=city.slice(cityIndex+5);
// document.write("City: "+city+"<br> After Replacement: "+replacingTxt+remainingTxt); 

//task 8:
// var text="Ali and Sami are best friends. They play cricket and football together.";
// for(var i=0;i<text.length;i++){
//     if(text.slice(i , i+3)==="and"){
//         text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }
// document.write(text);


//task 9:
// var str="472";
// var typeStr=typeof(str);
// var num=parseInt(str);
// var typeNum=typeof(num);
// document.write("Value: "+str+"<br>Type:"+typeStr+"<br>Value: "+num+"<br>Type: "+typeNum); 

//task 10:
// var input=prompt("Entre your favourite fruit..");
// var cap_input=input.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+cap_input);

//task 11:
// var input=prompt("Entre your favourite fruit..");
// var firstChar=input.slice(0,1);
// var otherTxt=input.slice(1);
// var otherTxtCap=otherTxt.toLowerCase()
// var firstCharCap=firstChar.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+firstCharCap+otherTxtCap);

//Task 12:
// var num=35.36;
// var str=num.toString();
// var type1=typeof(str);
// document.write("Number: "+str+"<br>");
// var first=str.slice(0,2);
// var dot=str.slice(3);
// document.write("result: "+first+dot);
 
//task 13:
// var userName=prompt("Entre your name..");
// for (var i=0;i<=userName.length;i++){
//     if(userName[i]==="," || userName[i]==="." || userName[i]==="@" || userName[i]==="!"){
//     alert("Please entre a valid name");
//     break;
//     }
// }
// document.write("<h1>"+userName+"</h1>");

// tas 14:

// var array=["cake","apple pie","cookie","chips","patties"]
// var fav=prompt("Entre your favourite item");
// var a=fav.toLowerCase();
// for(var i=0;i<=array.length;i++){
//     if(a===array[i]){
        
//         alert(a+" is available at index "+i+" in our bakery");
        
        
//     }     
// }

// alert(fav+"Not available");

//Task 15
//  var inputTxt = (prompt("Enter Password"));
//  var a=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
// if(inputTxt.value.matches(a)) 
// {
//     alert("Success");
// }
// else{
//     alert("Please enter a valid password");
// }


//Task 16
// var university="University of Karachi";
// var arr=university.split();
// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>");

// }

//task 17:
// var country="Pakistan";
// var lasChar=country.slice(-1);
// document.write("User Input: "+country+"<br>Last Character of input: "+ lasChar);

 // //Task 18
// var txt = "The quick brown fox jumps over the lazy dog";
// count= 0;
// for (var i = 0; i < txt.length; i++){
//     if(txt.charAt(i)==='c') {
//         count++;
//     }

// }
// document.write("The quick brown fox jumps over the lazy dog"  + "<br/>" + "There are"+ " " + count + " " + "occurence(s) of word 'the'");



 



//chapter# 26-30

//task 1:
// var number=3.45214;
// var r=Math.round(number);
// var f=Math.floor(number);
//  var c=Math.ceil(number);
// document.write("<div style="+"border: 2px; background-color: antiquewhite;"+">Number:"+number+"<br>round off value:"+r+"<br>floor value:"+f+"<br>ceil value:"+c+" </div>");

//task 2:
// var number=-2.673;
// var r=Math.round(number);
// var f=Math.floor(number);
//  var c=Math.ceil(number);
// document.write("<div style="+"border: 2px; background-color: antiquewhite;"+">Number:"+number+"<br>round off value:"+r+"<br>floor value:"+f+"<br>ceil value:"+c+" </div>");

//task 3:
// var num=-4;
// var value=Math.abs(num);
// document.write("The absolute value of "+num+" is "+value);
 

//task 4:
// var ran_num=Math.random()*6;
// var round=Math.round(ran_num);
// var ran_num=Math.random()*6;
// var round2=Math.round(ran_num);
// document.write("random dice value: "+round);
// document.write("<br>random dice value: "+round2);

//task 5:
// var ran_num=Math.random()*2;
// var ceil=Math.ceil(ran_num);
// if (ceil===2){
//     document.write(ceil+"<br> <h3>random coin value: Head</h3>");
// }
// else{
//     document.write(ceil+"<br> <h3>random coin value: Tail</h3>");
// }

//task 6:
// var ran_num=Math.random()*100;
// var round=Math.round(ran_num);
// document.write("<div class='second-head'> " + "<h3>" + "random numbers between 1 to 100: "+round+ "</h3>" + "</div>");

//task 7:
// var weight=prompt("Entre your weight in kilogram");
// var con_weight=parseFloat(weight);
// document.write("The weight of user is "+con_veight+" kilogram");

//task 8:
// var input=prompt("Entre a number between 1 to 10");
// var num=parseInt(input);
// var guess=6;
// if(num==guess){
//     alert("Congraulate the user");
// }
// else{
//     alert("Try Again");
// }

//chapter 31-35

// //Task 1  
// var today = new Date();
// document.write("<h1 style='font-size:24px;'>" + today + "</h1>");


 
// // Task 2  
// var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" ,"July" , "August" , "September" , "October" , "November" , "December"];
// var d = new Date();
// alert("Current month: "+ " " + monthNames[d.getMonth()]);



// //Task 3
// var today = new Date();
// today.toString();
// var b =today.toString();
// var c = b.slice(0,3);
// alert("Today is " + " " + c);



// //Task 4
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// if (nameOfToday === "Sat" || nameOfToday === "Sun"){
//     alert("It's Fun day")
// }



// //Task 5
// var b = new Date();
// if (b < 16) {
//     alert("First fifteen days of the month");
// }
// else 
// {
// alert("Last fifteen days of the month");
// }




// //Task 6
// var a = new Date();
// var b = a.getTime();
// var c = b/(1000*60);
// document.write("<h4 style='font-size:24px;'>" + a + "<br/>" + "Elapsed millisecond since january" + "  " + b + "<br/>" + "Elapsed minutes since january"  + "  " + c + "</h4>");

 

// //Task 7
// var hour;
// if(hour>=12){
//     alert( "It's AM" )
// }
// else {
//     alert("It's PM")
// }
//task 8
// var later=new Date("Dec,31,2020");
// document.write("Later date: ".bold()+later); 
 
//task 9:
// var currentDate=new Date("april,26,2020");
// var CDateMiili=currentDate.getTime();
// var today=new Date();
// var todayMilli=today.getTime();
// var diff=todayMilli-CDateMiili;
// var day=Math.floor(diff/(1000*60*60*24));
// document.write(day+" days have passed since 1st ramzan,2020");

//task 10;
// var today=new Date();
// var todayMiili=today.getTime();
// var firstDay=new Date("Jan,01,2020");
// var firstDayMilli=firstDay.getTime();
// var diff=todayMiili-firstDayMilli;
// var sec=Math.floor( diff/(1000*60));
// document.write("On referance date "+today+", "+sec+" second had passed since begening of 2020");

//task 11;
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,2020,11:24:25");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24));
// document.write("current date"+today+"<br> "+Math.abs(sec)+" hour back it was"+hundYears);


//task 12:
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,1920,00:20");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("current date"+today+"<br> "+sec+" year back it was"+hundYears);

//task 13:
// var today=new Date();
// var todayMiili=today.getTime();
// var birthDay=new Date("nov,21,1999");
// var birthDayMilli=birthDay.getTime();
// var diff=todayMiili-birthDayMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("your age is "+sec+"</br>Your birth year is 1999");

//task 14:
// var cus_name=prompt("entre your name..");
// var cur_month=prompt("entre your bill's current month.");
// var num_unit=prompt("entre your bill's number of unit..");
// var number=parseInt(num_unit);
// var charge_unit=16;
// var net=number*charge_unit;
// var sur_charge=350;
// var gross=net+sur_charge;
// document.write("Custumer Name: "+cus_name+"<br>Month: "+cur_month+"<br>Number of unit: "+num_unit+"<br>Charges per unit: "+charge_unit+"<br><br>Net amount Payable(within due date: )"+net+"<br>Late payment sur charge: "+sur_charge+"<br>Gross amount payable(After due date): "+gross);

//chapter 36-38

// //Task 1 
// function displayDate()
// {
//     document.write("<h1>" + new Date() + "</h1>");
// }
// displayDate();


// //Task 2
// function name()
// {
//     var firstName = prompt("Enter Your First Name","enter first name");
//     var lastName = prompt("Enter Your Last Name","enter last name");
// alert("Welcome " + " " +firstName+ " " +lastName)
// }
// name(2,3);


// //Task 3 htmlcode function call ------->
// function add(){
//     var a,b,c;
//     a=Number(document.getElementById("first").value);
//     b=Number(document.getElementById("second").value);
//     c= a + b;
//     document.getElementById("answer").value= c;
//     }


// //Task 4
// function calculate(){
// var val1=prompt('Enter your first value');
// var sign=prompt('Enter your operator');
// var val2=prompt('Enter your second value');

// if(sign === '+'){
//     alert((+val1)+(+val2));
//     return
// }
// else if(sign === '-'){
//     alert(val1-val2);
//     return
// }
// else if(sign === '*'){
//     alert(val1*val2);
//     return
// }
// else if(sign === '/'){
//     alert(val1/val2);
//     return
// }
// else if(sign === '%'){
//     alert(val1/val2*100);
//     return
// }
// else{
//     alert("Rong Input");
//     return
// }
// }
// calculate();


// //Task 5
// var function  sumOfSquares(num) {
//     var i, sum = 0;
//     for (i = 1; i <= num; i += 1) {
//       sum += i * i;
//     }
//     return sum;
//   }
//   var num = parseInt(prompt("Enter a number:"), 10);
// document.write("The sum of squares for numbers up to and including " + num + " is " +
// sumOfSquares(num)) ;


// //Task 6 
// function factNum(){
//     var num, f=1;
//     num = prompt("Input Number");
// for (var i=num; i >= 1; i--){
//     f = f * i;
// }

// document.write("Factorial Of   A Number Is:" + "  " + f);

// }
// factNum();




// //Task 7
// function cont() {
//     var fnum, lnum;
//     var fnum = prompt("Input Start number");
//     var lnum = prompt("Input End number");
//     for (var i = fnum; i <=lnum; i++){
//         document.write("<table id='cont'>" + "<tr id='cont'>" + "<td >" + i + "</td>" +"</tr>" + "</table>");
//     }
//     }
//     cont();
    




//Task 9 
// function areaRectangular(w,h,area){
//     var w,h,area;
//     area=w*h;
//     document.write("Area is" + " " + area);
// }
// areaRectangular(45,65);



// //Task 10
// function wordCheck() {
// var  wordUser = prompt("Enter Your word");
// var check = "";
// for (var i = wordUser.length - 1; i >= 0; i--) {
// check += wordUser[i]
// }
// if (wordUser === check){
//   alert(wordUser + " " + "is palindrome word")
// }
// }
// wordCheck();



// //Task 11
// function user() {
// var userText = (prompt("Input text"));
// var firstChar = userText.slice(0,1);
// var otherChar = userText.slice(1);
// firstChar = firstChar.toUpperCase()
// otherChar = otherChar.toLowerCase()

// var userText = firstChar + otherChar;
// alert(userText);
// }

// user();



// //Task 12 
// const str = 'Web Development Tutorial';
// const longestWord = (str) => {
// const strArray = str.split(' ');
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//           return strB.length - strA.length;
//     }
// );
// return sortedStrArray;
// }
// alert(longestWord(str));



// //Task 13
// function txtcount(a = "JSResourceS.com" , count = 0) {
// for(var i = 0; i < a.length; i++) {
//     if(a.charAt(i) === 'c'){
//         count++;
//     }
// }

// alert(count);
// }
// txtcount();



// //Task 14

// function Circumference(radius,coc){
// coc=2*Math.PI*radius;
// document.write("The circumference is" + " " + coc + "<br/><br/>");
// }
// Circumference(45);

// function calcArea(radius,aoc){
//  var radius, aoc;
// aoc=Math.PI*radius*radius;
// document.write("The area is" + " " + aoc);
//  }
//  calcArea(45);

