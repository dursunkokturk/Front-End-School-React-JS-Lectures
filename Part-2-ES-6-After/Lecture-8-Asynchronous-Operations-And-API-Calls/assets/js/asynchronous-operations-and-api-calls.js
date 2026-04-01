// Asenkron Islemler 
// API Cagrisi, Dosya Okuma Islemleri Icin Kullanilir

// Promise 
// Gelecekte Tamamlanacak Bir Islemi Temsil Eder

// Async Await 
// Ise Promise'leri Daha Okunakli Hale Getirir

const come = async()=> {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = response.json();
    console.log(data);
  } catch (error) {
    console("Hata : ",error);
  }
}

come();

// React'ta API'dan Data Alirken useEffect Icinde Async Await Kullaniyoruz