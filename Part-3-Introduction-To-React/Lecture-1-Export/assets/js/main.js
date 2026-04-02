export function sayHello() {
  console.log("Dosyada Üst Sırada İşlemi Export Ediyoruz")
}


const name = "Dursun";
console.log(name);

document.querySelector('p').innerText = "Merhaba";

// Dosya Icinde Bulunan Isleme Baska Bir Dosyadan Erisilmesi Icin 
// Sadece Islemin Atandigi Degisken Adini Export Ediyoruz

// Export Edilen Islemin Hangi Dosyada Kullanilacak Ise 
// O Dosyaya Import Edilmesi Gerekiyor
export { name };