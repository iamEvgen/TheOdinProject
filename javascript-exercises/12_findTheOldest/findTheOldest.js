const findTheOldest = function(people) {
    people.map(person => {
        let age;
        const currentYear = new Date().getFullYear();
        person.yearOfDeath ? age = person.yearOfDeath - person.yearOfBirth : age = currentYear - person.yearOfBirth;
        person.age = age;
    })
    people.sort((person1, person2) => person1.age > person2.age ? -1 : 1);
    people.map(person => delete person.age);
    console.log(people);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
