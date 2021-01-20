/*
SE Boot Camp Assignment 7Create a JavaScript file (link it to anHTML file),and write code for below task:
Lucas and John are trying to compare their BMI(Body Mass Index), which iscalculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

*/

let johnMass = 150;
let johnHeight= 1.8;
let lucasMass = 100;
let lucasHeight = 1.6;
let johnBMI = johnMass/johnHeight ** 2;
let lucasBMI = lucasMass /lucasHeight ** 2;
let lucasHigherBMI = false;

if(lucasBMI > johnBMI){
    lucasHigherBMI = true;
}


if(!lucasHigherBMI){
console.log("Lucas and John are friends,Lucas is ", lucasHeight, "m tall and  John is ", johnHeight ,"m tall. So John has higher BMI than Lucas, that is " , johnBMI);
}