var firstName = "Connor"
const states = "50"
var sum = 5 + 4;
// adds 5 and 4 together to get 9
console.log(sum);

function sayHello() {
    alert("Hello World!");
};

sayHello();



// charles is 21
// abby is 27
// james is 18
// john is 17
// var Charles = 21;
// var Abby = 27;
// var James = 18;
// var John = 17;

let people = [
    {name: 'Charles', age: 21},
    {name: 'Abby', age: 27},
    {name: 'James', age: 18},
    {name: 'John', age: 17}
]

function checkAge() {
    for (i = 0; i < people.length; i++) {
        if (people[i].age < 21) {
            alert('Sorry ' + people[i].name + ', you are too young!');
        } else {
            alert('Welcome ' + people[i].name + ' to the party!');
        }
    }
}

checkAge();

var veg = ["Black-eyed Peas", "Green beans", "Corn", "Spinach"];

for(var i = 0; i < veg.length; i++) {
    console.log(veg[i]);
}
