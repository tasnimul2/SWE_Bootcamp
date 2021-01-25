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
const btn1 = document.querySelector('.open-modal-btn1');
const btn2 = document.querySelector('.open-modal-btn2');
const btn3 = document.querySelector('.open-modal-btn3');
const btn4 = document.querySelector('.close-modal-btn');
const openBtn = document.querySelector('.open-modal-btn');
btn1.href = '#open-window';
btn2.href = '#open-window';
btn3.href = '#open-window';
btn4.href = '#main-window';

openBtn.addEventListener('click', function(){

})