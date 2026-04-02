export function sayHello(){
  console.log("Notification");
}

// Default Olarak Tanimlanan Fonksiyonun Yazildigi Dosya
// Modul Olarak Kabul Edildigi Icin 
// Import Edilecegi Dosyada Default Keywor'u olan Fonksiyon Varsayilan Olarak Calisir
// Ayrica Import Edildigi Dosyada Farkli Bir Isim Kullanilarak Cagirilabilir
export default function sendNotification(){
  console.log("Send Notification");
}