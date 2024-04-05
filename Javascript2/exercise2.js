// 1. Write a declaration function that take a parameter called: “name”, and return a greeting message including that name
/* function មយName(name) {
    console.log("greeting to :", name);
  }
  yourName("DaisuKe"); */


  //2. Write an expression function that take two parameters “num1” & “num2” and returns their sum

  /* const sum = (number1, number2) => {
    return number1 + number2;
  }

  console.log(sum(5, 8)); */

  // 3. Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers

/*   const average = (number) => {
    let sum = 0
    for (let i = 0; i< number.length; i++) {
        sum = sum + number[i];
    }
    return sum /number.length;
  }

  console.log(average([10,20,30,40,50])); */

  // 4. Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)

/*  let weight = 72;
 let height = 179;

 const BMI = function (weight, height) {
    return weight/(height*height);
 }

 console.log('BMI: ', BMI(weight,height)); */

 // 5. Write a function that could take a parameter that is an array of objects representing products with `name`,
 // `price` and `quantity` property and filter out products with a quantity of zero



 // 6. Write a function that could check if the password provided is strong or not. 
 // A strong password should have a minimum length of 8 characters

 /* function checkPass(password) {
    if (password.length >= 8){
        console.log('Strong Password');
    } else {
        console.log('Weak Password');
    }
 }

 checkPass('123456789'); */

 // 7. Write a function that count vowels of a string that provided as an input 
  //and return the count of vowels (a, e, i, o, u)

 /*  function vowels(string){
    let count = 0;
    for (let i = 1; i < string.length; i++) {
        if ( 
        string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' ||
        string[i] === 'o' ||
        string[i] === 'u'
        ) {
            count++;
        }
 }
 return count;
}

console.log(vowels('Hello umbrella'));
 */

// 8. Write a function that could sort a list of numbers in ascending order.

/* function sortNum(number) {
    return number.sort((a, b) => a - b);
}
console.log(sortNum([30,50,87,45,234])); */

// 9. Write a function that takes an array of numbers 
//as an input and returns the median value

/* function madianValue(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let medianNumber = 0;
  
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray.length % 2 == 0) {
        medianNumber = sortedArray.length / 2;
        return (array[medianNumber - 1] + array[medianNumber]) / 2;
      } else {
        return Math.ceil(sortedArray.length / 2);
      }
    }
  }
  console.log(madianValue([1, 2, 3, 4, 5, 6, 7, 8, 9])); */


  // 10. Write a function that takes a non negative number as 
  //a parameter and returns the factorial of that parameter

  function FactorialNumber(nonFactorial){
    let factorial = 1;
    if(nonFactorial > 0){
      for (let i = 1; i <= nonFactorial; i++){
        factorial *= i;
      }
    }
    return factorial;
  }

  console.log(FactorialNumber(5));