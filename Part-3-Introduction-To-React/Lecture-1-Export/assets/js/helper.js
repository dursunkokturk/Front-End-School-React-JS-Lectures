import { name, sayHello } from "./main.js";

/* Iki Farkli Dosyada Iki Farkli Isi Yapan 
    Ancak Ayni Isme Sahip Olan Fonksiyonlar 
    Ayni Dosyaya Import Edilecek Ise 
    Digerlerinin Adini Import Edilen Dosya Icinde Degistirmek Gerekiyor */

/* Bir Modulden Export Edilen Fonksiyonun Yaninda default Keyword Varsa 
Import Edilirken Karisiklik Olmamasi Icin
Fonksiyon Adini Suslu Parantezden Once Yazmak Daha Iyi Olur */
import notification, { sayHello as sayHi } from "./notification.js";

name

document.body.innerText = name;

sayHello();
sayHi()
notification();