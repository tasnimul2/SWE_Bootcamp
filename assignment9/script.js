const john ={
    firstName:'John',
    lastName:'Willams',
    birthYear:1996,
    job:'student',
    friends:['Mike','Jack','Peter'],
    calAge:function(){
        this.age=2021-this.birthYear;
        return this.age
    },
    getSummary:function(){
        return this.firstName + 'is a ' + this.calAge() + ' year old, and he has a  drivers license'
    }

}

console.log( "john has " + john.friends.length + " friends, and his best friends is called "+ john.friends[2]);
console.log( john.getSummary());

