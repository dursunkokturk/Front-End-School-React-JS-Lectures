// Varsayilan Degerler / Parametre Kontrolu

// Fonksiyon Parametrelerine Varsayilan Degerler Atanabilir
// Fonksiyona Parametre Gonderilmez Ise Veya undefined Gelir Ise

const selamla = (name = "Misafir", language = "TR") => { return `${name} - ${language}` };
selamla("Ali","EN");
selamla("Ali");
selamla();