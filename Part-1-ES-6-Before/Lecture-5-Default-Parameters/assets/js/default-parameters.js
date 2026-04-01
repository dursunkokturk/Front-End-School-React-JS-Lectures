// Varsayilan Degerler / Parametre Kontrolu

// Fonksiyon Parametrelerine Varsayilan Degerler Atanabilir
// Fonksiyona Parametre Gonderilmez Ise Veya undefined Gelir Ise

function selamla(name, language) {
  if (language === undefined) {
    language = "TR";
  }
  if (name === undefined) {
    name = "Misafir";
  }
  return name + " - " + language;
}

selamla("Ali","EN");
selamla("Ali");
selamla();