const fruits = ["elma", "armut"];
const vegetables = ["havuç", "patates"];
const all = [...fruits, ...vegetables];

console.log(all);

const person = {
  name: "Dursun",
  age: 20
}

const newObject = [...person, { city: "Zonguldak" }];
console.log(newObject);