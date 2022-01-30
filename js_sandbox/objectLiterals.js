console.log('test')

const person =  {
    firstName: 'steve',
    lastName: 'Paul',
    age: 30,
    email: 'asdf@asd.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miamy',
        states: 'FL'
    },
    getBirthYear: function() {
        return 2017 - this.age;
    }
}

let val;

val = person;
console.log(val)
val = person.firstName
console.log(val)
val = person['lastName']
console.log(val)
val = person.age;
console.log(val)
val = person.hobbies[1]
console.log(val)
val = person.address.states
console.log(val)
val = person.address['city']
console.log(val)
val = person.getBirthYear()
console.log(val)

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 39},
    {name: 'a1Mike', age: 39},
]

for(let i=0; i < people.length; i++) {
    console.log(people[i].name)
}
