let celcius = 20;

let fahrenheit = (celcius * 9/5 + 32);

console.log(celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit");


fahrenheit = 50;
celcius = (fahrenheit - 32) * 5/9 ;
console.log(celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit");


//class activity - Knicks vs nets;

let kicksAvg = (109 + 95 + 123)/3;
let netsAvg = (97 + 112 + 101)/3;


if(kicksAvg> netsAvg){
    console.log("Knicks win");
}else if(kicksAvg === netsAvg){
    console.log("tie");
}else{
    console.log("nets win");
}