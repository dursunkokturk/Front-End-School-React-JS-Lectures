// student1 Objesinin Icindeki Datalara Ulasiyoruz
// student1 Objesinin Icindeki Datalara Istenilen Yerden 
// const Satirindaki student1 props Uzerinden Ulasabiliriz
const student1 = {
  name: "Dursun",
  age: 20
}

const { name1, age1 } = student1;





// student2 Objesinin Icindeki Datalara Ulasmak Icin
// Baska Bir Deger Kullaniyoruz
// student2 Objesinin Icindeki Datalara Istenilen Yerden 
// const Satirindaki student2 props Uzerinden Kod Yazan Kisinin Istegi Uzerine
// Obje Icindeki Degere Farkli Bir Isim Uzerinden Ulasabiliriz
const student2 = {
  name: "Dursun",
  age: 20
}

const { name2: name, age2: age } = student2;





const colors = [red,green,yellow];
const [firstColor,endColor] = ['red','yellow'];