//!! varaible names shoudl start with a lowercase letter
//!! we encourage you to use comments in your JS files

let Name="My Name Is"
let Chris="Chris"
console.log( Name+" "+Chris)
alert(Name+ " "+ Chris)

//!! you don't need to define these variables since you will be prompting the user for input and immediately reassigning these values  
let Balance=200
let Withdraw= 10

Balance=prompt("What is Your Balance?")
Withdraw=prompt("How much will you be taking?")
Balance=Balance-Withdraw
//!! you already defined balance as balance minus withdraw so there is no need to minus withdraw again, you should have just passed in Balance
alert ("Your balance is" + (Balance - Withdraw))

let grade= 80
let extra= 5
grade=prompt("What is Your Grade?")
extra=prompt("How much Extra credit?")
//!! you have to use parseInt() to make a string read as an integer with concatenation 
console.log(grade + extra)
alert ("Your Grade is " + grade + extra)








