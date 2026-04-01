// Asenkron Islemler 
// API Cagrisi, Dosya Okuma Islemleri Icin Kullanilir

// Promise 
// Gelecekte Tamamlanacak Bir Islemi Temsil Eder

// Async Await 
// Ise Promise'leri Daha Okunakli Hale Getirir

fetch('https://dummyjson.com/recipes').
  then(response => response.json()).
  then(data => console.log(data)).
  catch(err => console.log(err))