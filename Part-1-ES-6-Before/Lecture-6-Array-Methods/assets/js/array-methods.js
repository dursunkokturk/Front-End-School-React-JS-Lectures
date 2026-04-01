const numbers = [1, 2, 3, 4, 5];
const twiceAsMuch = [];

for (let i = 0; i < numbers.length; i++) {
  twiceAsMuch.push(numbers[i] * 2);
}
console.log(twiceAsMuch);





const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers % 2 === 0) {
    doubleNumbers.push(numbers[i]);
  }
}
console.log(doubleNumbers);