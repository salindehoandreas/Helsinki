/*let john = ['john', 'doe', 35, true, [80,90,100]]

console.log(john.length);
john[2] = 40;
console.log(john[john.length - 1]);*/

let student = [
    {
        fullname: "John",
        age: 24,
        address: "Minut",
    },
    {
        fullname: "jane",
        age: 23,
        adress: "minahasa",
    },
];

student.filter(function(value) {
    return value.age >= 24;
});
console.log(student);