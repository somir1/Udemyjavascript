
//spread
const nums = [1,2,3,4,5,6];
const newnums = [...nums, 7 ,8, 9, 10]

console.log(newnums)

const person = {
    name: "Samir"
};

const newPerson = {
    ...person,
    age: 27,
    gender: "Male"
}

console.log(newPerson)

//rest
const filter = (...args) =>{
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4,5))