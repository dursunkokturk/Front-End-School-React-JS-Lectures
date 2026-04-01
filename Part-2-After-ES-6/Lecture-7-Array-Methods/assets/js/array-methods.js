// map / filter / reduce

// Bu Methodlar Kullanilarak Dongu Yazmadan Array Uzerinde Islem Yapilir
// map : Her Elemani Donusturur
// filter : Kosula Uyan Elemanlari Alir
// reduce : Tum Elemanlari Tek Bir Degere Indirir

const numbers = [1, 2, 3, 4, 5];
const twiceAsMuch = numbers.map(x => x * 2);
console.log(twiceAsMuch);





const doubleNumbers = numbers.filter(x => x % 2 === 0);

console.log(doubleNumbers);


// reduce Parantezinde 
// Ilk Degisken Array Icindeki Toplanan Degerlerin Birikimini Gosterir
// Ikinci Degisken Array Icindeki Toplanacak Degerleri Gosteriyor
const total = numbers.reduce((number, x) => number + x, 0);
console.log(total);