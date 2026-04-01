const fruits = ["elma", "armut"];
const vegetables = ["havuç", "patates"];
const all = fruits.concat(vegetables);

console.log(all);

const person = {
  name:"Dursun",
  age:20
}

const newObject = Object.assign({},person,{city:"Zonguldak"});
console.log(newObject);