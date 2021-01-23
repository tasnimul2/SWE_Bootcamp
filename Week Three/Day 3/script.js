/*
the Nets and the Knicks! There is a new discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgNets' and 'avgKnicks'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Knicks win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Nets score 44, 23 and 71. Knicks score 65, 54 and 49
TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27

*/

const calcAverage = (score1,score2,score3) =>   (score1+score2+score3)/3;
console.log(calcAverage(10,10,10));

const myArr = ["apple","banana", "lemon"];

console.log(myArr[1]);

const arrMethid = new Array("apple","banana", "lemon");

console.log(arrMethid);

const john ={
    firstName: 'john',
    lastName: 'williams',
    age:24,
    friends:['me','my self', 'I'],
    calBirthYear: function (){
        this.birthYear = 2020 - this.age;
        return this.birthYear;
    }
}

console.log(john);
john['instagram'] = '@john'; //adds instagram to the object.

console.log(john['age']);
console.log(john.calBirthYear());


/*
Let's go back to Lucas and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
 
1. For each of them, create an object with properties for their full name, mass, and height (Lucas Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Lucas Miller's (23.9)!"
 
TEST DATA: Lucas weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const johnB = {
    weight: 92,
    height: 1.95,
    getBMI: function (){
        return this.weight/this.height ** 2;
    }
}

const lucas ={
    weight: 78,
    height: 1.69,
    getBMI: function (){
        return this.weight/this.height**2;
    }
}


console.log("lucas BMI: "+ lucas.getBMI() + " John BMI : "+ johnB.getBMI() );
if(lucas.getBMI() > johnB.getBMI() ){
    console.log("Lucas has heigher BMI");
}else if(lucas.getBMI() < johnB.getBMI()){
    console.log("john has heigher BMI");
}else {
    console.log("they have samw BMI");
}



for(let i = 0; i < 100; i++){
    let dice = Math.trunc((Math.random()*100))+1;
    console.log(dice);
    
}

let dice = Math.trunc((Math.random()*100))+1;

