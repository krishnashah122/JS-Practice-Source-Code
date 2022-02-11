// SECTION - 1

//1. WAP to accept two numbers from user and multiply it.

/*
let a = prompt("enter your no");
let b = prompt("enter 2nd no");
document.write(a*b);
*/


//2. WAP to convert centigrade into fahrenheit.

/*
let c = 50;
let f = 1.8*c+32;
console.log(f);
*/


//3. WAP to solve quadratic eqn.

/*
let a = 2;
let b = 7;
let c = 6;
let x = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
let y = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
console.log(`The value of x is ${x} and the value of y is ${y}`);
*/


//4. WAP to get 4-digits number and find sum of the digits.

/*
let a = prompt("Enter a 4-digits number");
let sum = 0;
for (let i = 0; i <= 4; i++) {
    let b = a%10;
    sum = sum+b;
    a = parseInt(a/10);
}
console.log(`The sum of the digits is ${sum}`);
*/


//5. WAP to get 4-digits number and find sum of first and last digit of number.

/*
let a = prompt("Enter the 4-digit number");
let x = a%10;
let y = parseInt(a/1000);
let sum = x + y;
console.log(`The sum of first and last digit is ${sum}`);
*/


//6. WAP to asking cost in paisa and convert it into nearest rupees and paisa.

/*
let paisa = prompt("Enter the cost in paisa");
let rupees = paisa/100;
console.log(`The cost in rupees is ${rupees}`);
*/

// -------------------------------------------

// SECTION - 2

//7. WAP to display whether  the entered number is odd or even.

/*
let number = prompt("Enter a number");
if (number%2===0){
    console.log("The number is Even");
}
else{console.log("The number is Odd")
}
*/


//8. WAP to ask a number and check whether the entered number is divisible by 5 but not by 11.

/*
let a = prompt("Enter a Number");
if (a%5===0 && a%11!==0) {
    console.log("The number is exactly divisible by 5 but not by 11");
}    
else if (a%5===0 && a%11===0){
    console.log("The number is exactly divisible by 5 and 11");
}
else if (a%5!==0 && a%11===0){
    console.log("The number is not exactly divisible by 5 but exactly divisible by 11");
}
else {
console.log("The number is not exactly divisible by 5 and 11");
}
*/


//9. WAP to check whether the entered character is vowel or consonant.

/*
let letter = prompt("Enter a Character");
let char = letter.toUpperCase;
if (letter==="A" || letter==="E" || letter==="I" || letter==="O" || letter==="U") {
    console.log("The Character is Vowel")
} else {
    console.log("The Character is Consonant")
}
*/


//10. WAP to check whether the entered year is Leap year or not.

/*
let year = prompt("Enter a year");
if (year%400===0 || year%100!==0 && year%4===0) {
    console.log("The year is Leap year");
} else {
    console.log("The year is not Leap year");
}
*/


//11. WAP to check whether the triangle is Right angle triangle or not if the 3 sides are given.

/*
let h = 5;
let p = 4;
let b = 3;
if (h**2===p**2+b**2) {
    console.log("The triangle is Right angle triangle");
} else {
    console.log("The triangle is not Right angle triangle");
}
*/


//12. WAP to find greatest number among 3 numbers.

/*
let a = 5;
let b = 7;
let c = 9;
if (a>b) {
    if (a>c) {
        console.log(`The greatest number is ${a}`);
    } else {
        console.log(`The greatest number is ${c}`);
    }
} else if(b>c) {
    console.log(`The greatest number is ${b}`);
}
else {
    console.log(`The greatest number is ${c}`);
}
*/


//13. WAP of NTC to enter number of calls and find out total vat (10% of total) telecom service charge (10% of total + tsc) and total amount. The rate of total is given below.
// Number of calls         Rate
//No. of calls <= 175      Minimum Rs. 200/-
//No. of calls > 175       Rs. 2/call

/*
let calls = prompt("Enter the no. of calls");
let total,tsc,vat,totalAmount;
if (calls<=175) {
    total = 200;
    tsc = total*10/100;
    vat = (total+tsc)*10/100;
    totalAmount = total + vat;
    console.log(`The total amount is ${totalAmount}`);
} else {
    total = 200 + (calls-175)*2;
    tsc = total*10/100;
    vat = (total+tsc)*10/100;
    totalAmount = total + vat;
    console.log(`The total amount is ${totalAmount}`);
}
*/


//14. WAP to calculate total salary of employee based on the following conditions.
//If clerk house rent allowance = 0 else 8%
//If basic salary <= 3000 medical allowance = 7% else 5%
//Total salary = Basic salary + House allowance + Medical allowance

/*
let post = prompt("Enter c for clerk and m for manager");
let basic = prompt("Enter the basic salary");
let hra,ma;
if (post==="c") {
    hra = 0;
    if (basic<=3000) {
        ma = basic*7/100;
    } else {
        ma = basic*5/100;
    }
} else {
    hra = basic*8/100;
    if (basic<=3000) {
        ma = basic*7/100;       
    } else {
        ma = basic*5/100;
    }
}
let totalSalary = Number(basic) + Number(hra) + Number(ma);
console.log(`The Total Salary is ${totalSalary}`);
*/


//15. WAP to display the middle number among 3 numbers.

/*
let a = 7;
let b = 9;
let c = 8;
if (a>b && a<c || a<b && a>c) {
    console.log(`The middle number is ${a}`);
} else if (b>a && b<c || b<a && b>c) {
    console.log(`The middle number is ${b}`);
}
else {
    console.log(`The middle number is ${c}`);
}
*/


//16. WAP to display name of day in a week when the user enter the number of day of a week.
/*
let day = prompt("Enter the day number");
switch (day) {
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thrusday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid day");
        break;
}
*/


//17. WAP to find the sum of 1 to 100 numbers.

/*
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
*/


//18. WAP to find the sum of odd and even numbers upon 1 to 100 numbers.

/*
let oddSum = 0;
let evenSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i%2===0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;        
    }
}
console.log(`The sum of odd numbers is ${oddSum}`);
console.log(`The sum of even numbers is ${evenSum}`);
*/


//19. WAP to find the factorial of entered number.

/*
let n = prompt("Enter a Number");
let factorial = 1;
for(i=1; i<=n; i++){
    factorial = i*factorial;
}
console.log(factorial);
*/


//20. WAP to check whether the number is Armonstrong or not.

/*
const n = prompt("Enter a Number");
let b = n;
let x = 0;
while(b>0){
    let r = b%10;
    x = x + r*r*r;
    b = parseInt(b/10);
}
if (x==n) {
    console.log("The number is Armonstrong");
} else {
    console.log("The number is not Armonstrong");
}
*/


//21. WAP to check whether the number is Prime Numbers or not.

/*
let n = prompt("Enter a Number");
if (n%2==0) {
    console.log("The Number is not Prime Number");
} else {
    console.log("The Number is Prime Number");
}
*/


//22. WAP to display Prime Numbers upto N Numbers.

/*
let n = prompt("Enter any number");
for(i=2; i<=n; i++){
    if (i%2!=0) {
        console.log(i);
    }
}
*/


//23. WAP to display Fibonacci series upto 10 terms. (e.g. 0 1 1 2 3 5 8.....)

/*
let t1 = 0;
let t2 = 1;
let nextTerm;
for(i=0; i<=10; i++){
    console.log(t1);
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}
*/


//24. WAP to read positive integers less than 20 and display its multiplication table.

/*
let number = prompt("Enter a Number");
if (number<=20) {
    for(i=1; i<=10; i++){
        console.log(`${number}*${i}=${number*i}`);
    }
}
console.log("Please enter number less than 20")
*/


//25. WAP to display the ASCII Code of entered character.

/*
let char = prompt("Enter a character");
let ascii = char.charCodeAt(0);
console.log(`The ASCII value is ${ascii}`);
*/


//26. WAP to accept any integer and display its reverse order.

/*
let number = prompt("Enter any Number");
let reverse = 0;
while(number>0){
    let remainder = number%10;
    reverse = reverse*10 + remainder;
    number = parseInt(number/10);
}
console.log(`The reverse of the number is ${reverse}`);
*/


//27. WAP to accept any number and add its digits.

/*
let number = prompt("Enter a number");
let sum =0;
while(number>0){
    let remainder = number%10;
    sum = sum + remainder;
    number = parseInt(number/10);
}
console.log(`The sum of the digits is ${sum}`);
*/


//28. WAP to read a Decimal number and convert it in Binary number.

/*
let number = prompt(`Enter a number`);
let bin = 0;
let i = 1;
while(number>0){
    let remainder = number%2;
    number = parseInt(number/2);
    bin = bin + remainder*i;
    i = i*10;
}
console.log(`The Binary of the number is ${bin}`);
*/


//29. WAP to display the series 1,5,9,13....upto 10th terms.

/*
let term = 1;
for(i=1; i<=10; i++){
    console.log(term);
    term = term + 4;
}
*/


//30. WAP to check whether the number is Palindrome or not.

/*
let number = prompt(`Enter any Number`);
let temp = number;
let sum = 0;
while(number>0){
    let rem = number%10;
    sum = sum*10 + rem;
    number = parseInt(number/10);
}
if (sum == temp) {
    console.log(`The number is Palindrome`);   
} else {
    console.log(`The number is not Palindrome`);
}
*/


//31. WAP to display multilication table of first n Natural numbers.

/*
let n = prompt(`Enter the Number`);
for(i=1; i<=n; i++){
    for(j=1; j<=10; j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}
*/


//32. WAP to display the following series.
/*       1 
        2 2
       3 3 3
      4 4 4 4 
     5 5 5 5 5    */

/*
for(i=1; i<=5; i++){
    for(x=4; x>=i; x--){
        document.write("&nbsp");
    }
    for(j=1; j<=i; j++){
        document.write(i);
    }
    document.write("<br>");
}
*/


//33. WAP to display the following.
/*   5 10 15 20 25
    10 15 20 25 30
    15 20 25 30 35
    20 25 30 35 40  */

/* 
let x = 1;
let y = 5;
for(i=1; i<=4; i++){
    for(j=x; j<=y; j++){
        document.write(j*5);
        document.write("&nbsp&nbsp");   
    }
    x = x+1;
    y = y+1;
    document.write("<br>");
}
*/


//34. WAP to display the following pattern.
/*      1
        2   3
        4   5   6
        7   8   9   10
        11  12  13  14  15     */

/*
let x = 0;
for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        x = x+1;
        document.write(x);
        document.write("&nbsp&nbsp&nbsp&nbsp");
    }
    document.write("<br>");
}
*/


//35. WAP to display the following pattern.
/*   *****
     *   *
     *   *
     *   *
     *****    */


//  FUNCTION

//36. WAP to display all even numbers from 2 to 40 using-returnable function.

/*
function even(a,b){
    for (i=a; i<=b; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
even(2,40);
*/


//37. WAP to calculate factorial number of any number entered through the keyboard using returnable function.

/*
function factorial(num){
    let fact =1;
    for(i=2; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(5));
*/


//38. WAP to calculate the value of a raised to b using function.

/*
function power(a,b){
    let pow = a**b;
    console.log(pow);
}
power(6,2);
*/


//39. WAP to display the sum of the digits of the entered number.

/*
function digitSum(num){
    let sum = 0;
    while(num>0){
        let rem = num%10;
        sum = sum + rem;
        num = parseInt(num/10);
    }
    console.log(`The sum of the digits is ${sum}`);
}
digitSum(123);
*/


//40. WAP to find the sum of square of first n natural numbers using function.

/*
function sqrSum(num){
    let sum = 0;
    for (i=1; i<=num; i++){
        sum = sum + i**2;
    }
    console.log(sum);
}
sqrSum(10);
*/


//41. WAP to display the sum of non-negative integers using recursive function.

/*
function sum(num){
    if(num>0){
        return num + sum(num-1);
    }
    else {
        return num;
    }
}
let number = parseInt(prompt("Enter any number"));
console.log(sum(number));
*/


//42. WAP to display multiplication table of any number using function.

/*
function table(num){
    for(i=1; i<=10; i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}
let number = parseInt(prompt("Enter any number"));
table(number);
*/


//43. WAP to find the factorial of any given number by recursive function.

/*
function factorial(num){
    let fact = 1;
    if(num>0){
        return fact = num*factorial(num-1);
    }
    else {
        return fact;
    }
}
let number = parseInt(prompt("Enter any number"));
console.log(factorial(number));
*/


//44. WAP to display all Fibonacci numbers upto n numbers recursively.

/*
// IMPORTANT
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const nTerms = prompt('Enter the number of terms: ');
if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
*/


//  ARRAY

//45. WAP to store ten different constant variables in any array and printout the greatest number.

/*
let variables = new Array;
let max = 0;
let min = 0;
for (i=1; i<=10; i++){
    variables[i] = parseInt(prompt("Enter any number"));
}
for(elements of variables){
    if(elements>max){
        max = elements;
    } else if(elements<min){
        min = elements;
    }
}
console.log(`The maximum number is ${max} and the minimum number is ${min}`);
*/


//46. WAP to read salaries of n employees and count the numbers of employees getting salary between 5000 to 10000.

/*
let num = parseInt(prompt(`Enter the no of employee`));
let salary = new Array;
let count = 0;
for(i=1; i<=num; i++){
    salary[i] = parseInt(prompt(`Enter the salary of employee`));
}
for(elements of salary){
    if(elements>=5000 && elements<=10000){
        count++;
    }
}
console.log(`The number of employee having salary greater than 5000 and less than 10000 is ${count}`);
*/


//47. WAP to enter n numbers of elements in the array and then sort them in ascending order.

/*
let num = parseInt(prompt(`Enter the length of array you want`));
let unsort = new Array;
for(i=1; i<=num; i++){
    unsort[i] = parseInt(prompt(`Enter the element of array`));
}
for(i=0; i<num; i++){
    for(j=i+1; j<=num; j++){
        if(unsort[i]>unsort[j]){
            let temp = unsort[i];
            unsort[i] = unsort[j];
            unsort[j] = temp;
        }
    }
}
console.log(unsort);
*/


//48. WAP to enter n numbers of elements in the array and then sort them in descending order. 

/*
let num = parseInt(prompt(`Enter the length of array you want`));
let unsort = new Array;
for(i=1; i<=num; i++){
    unsort[i] = parseInt(prompt(`Enter the element of array`));
}
for(i=0; i<num; i++){
    for(j=i+1; j<=num; j++){
        if(unsort[i]<unsort[j]){
            let temp = unsort[i];
            unsort[i] = unsort[j];
            unsort[j] = temp;
        }
    }
}
console.log(unsort);
*/


//49. WAP to take input n numbers of students and sort them in alphabetical order.

/*
let num = parseInt(prompt(`Enter the no of students`));
let students = new Array;
for(i=0; i<num; i++){
    students[i] = String(prompt(`Enter the name of students`));
}
console.log(students.sort());
*/


//50. WAP to reverse a string by using library function also check whether the string is Palindrome or not.

/*
let str = prompt(`Enter any string`);
let arrayString = str.split("");
let reverseString = arrayString.reverse();
let joinArray = reverseString.join("");
console.log(joinArray);
if(str==joinArray){
    console.log(`The string is Palindrome`);
} else {
    console.log(`The string is not Palindrome`);
}
console.log(`The reverse of the string is ${joinArray}`);
*/


//51. WAP to enter a string and count total number of "A" in it.

/*
let char = prompt("Enter any character").toUpperCase();
let str = prompt("Enter any string").toUpperCase();
let arrayString = str.split("");
let count = 0;
for(elements of arrayString){
    if (elements==char){
        count++;
    }
}
console.log(`The number of ${char} is ${count}`);
*/


//52. WAP to read a line and replace space by ***.

/*
let sentence = prompt(`Enter any sentence`);
let arrSen = sentence.split("");
for(i=0; i<arrSen.length; i++){
    if(arrSen[i]==" "){
        arrSen[i] = "***";
    }
}
let replaced = arrSen.join("");
console.log(replaced);
*/




