let kicksAvg = (109 + 95 + 123)/3;
let netsAvg = (97 + 112 + 101)/3;


if(kicksAvg> netsAvg){
    console.log("Knicks win");
}else if(kicksAvg === netsAvg){
    console.log("tie");
}else{
    console.log("nets win");
}

kicksAvg = (88 + 91 + 110)/3;
netsAvg = (96 + 108 + 89)/3;


if(kicksAvg> netsAvg){
    console.log("Knicks win");
}else if(kicksAvg === netsAvg){
    console.log("tie");
}else{
    console.log("nets win");
}

/* B.

Jasonwants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 30 and 300. 
If the value is different, the tip is 20%.
1. Your task is to calculatethe tip, depending on the bill value.
 Create a variable called 'tip'for this. Try notto use an if/else statement.
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
 Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

 § TEST DATA: Test for bill values 275, 28 and 430 */
 let bill = 275;
 let tip =0;
 if(bill >=30 && bill <=300){
      tip = bill * .15;
 }else {
     tip = bill * .20;
 }

 console.log("Total :" + bill +tip);


 /* 
 C. 
 Challenges:Create a function called celsiusToFahrenheit:
 1.Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
 Create a functioncalled fahrenheitToCelsius;
 2.Store a fahrenheit temperature into a variable.  Convert it to celsius and output "NN°F is NN°C.
 
 */

 function celsiusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5 + 32);

    return celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit";

 }


function fahrenheitToCelsius(fahrenheit){
    celcius = (fahrenheit - 32) * 5/9 ;
    return celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit";
}

 console.log(celsiusToFahrenheit(20));
 console.log(fahrenheitToCelsius(50));


