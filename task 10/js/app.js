
// SECTION-1
console.log("SECTION_1\n\n");
console.log("1 + 2 = ",1+2);
console.log("apple + orange = ","apple"+"orange");
console.log("1 + 2+ apple = ",1+2+"apple");
console.log("apple + 1 + 2 = ","apple"+1+2);
console.log("1 + true = ",1+true);
console.log("0 == false : ",0==false);
console.log("1 === true : ",1===true);
console.log(" 2 == string(2) : ",2=="2");



// SECTION-2
console.log("SECTION_2\n\n");

// A Cricket Team has 11 players. Create a list with the names of all players.
 var team=["dhoni" ,"Sachin","kholi","bumrah","Rohit","Jasprit","Ashwin","Rahul","Jadeja","Rahane","Patel"];

//  Unfortunately, the first player had an injury. Remove him from the list of players.
//  team.splice(0,1);
team.shift();

//  Now, find out the number of players
console.log("Team size = "+team.length);

// Add another player to the above list of players to make the count 11.
// team.push("Umesh");
team.unshift("Umesh");
 
team.forEach((ele,ind) => {
    team[ind]=ele.toLowerCase();
});

// The cricket board has decided to take photographs of all players and so they would need the players list in sorted format.
team.sort();
console.log("after sorting : "+team);

// Display all the Players name and assign a random jersey number. For example. MS Dhoni-7
// var rand={};
var newArr = team.map(myFunction);
function myFunction(num) {
    return num+" "+parseInt(Math.random()*10);
  }
// for(i in team)
// {
//     rand[team[i]]=parseInt(Math.random()*10);
// }
console.log("After giving random number",newArr);
// The cricket board wants to print the names of all players in uppercase and store it in a different location for printing jerseys. Do not modify the existing players list.
var team1=[];
team.forEach((ele,ind) => {
    team1[ind]=ele.toUpperCase();
});
console.log("After changing to upper case : ", team1)




// SECTION-3
console.log("SECTION_3\n\n");

// Create a function to display numbers from 1 to 100.
console.log("Number from 1 to 100");
var a=1;
function number()
{
    while(a<=100)
    {
        console.log(a++);
    }
}
number();

// Create a function to display today's date in DD/MM/YYYY format.
var today = new Date();
console.log(today);
var dd = today.getDate();
console.log("Date : ",dd);
var mm = today.getMonth()+1; 
console.log("Month: ",mm);
var yyyy = today.getFullYear();
console.log("Year :",yyyy);
today = dd+'/'+mm+'/'+yyyy;
console.log("Display today date : ",today);

// Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value.
var cel=60;
function celtofahr()
{
    console.log("converting  60 deg. celsius to fahrenheit = ",( cel * 9/5) + 32);
}
celtofahr();

// Create a function which accepts an array of numbers as parameter and return the average of those numbers.

const arr=[1,2,3,4,5];
// function avg()
// {
//     for(i in arr)
//     {
//         sum+=arr[i];
//     }
//     console.log("Finding avg. of "+sum+" / "+arr.length+" = ",sum/arr.length);
// }
// avg();
function avg()
{
    let avg1= arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log("Finding avg. = ",avg1);
}
avg();
// Create a function to reverse a given string.


function reverseString(str) {
    console.log("Reverse a string hello = ",str.split("").reverse().join(""));
}
reverseString("hello");




