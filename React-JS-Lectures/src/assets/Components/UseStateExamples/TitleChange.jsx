import { useState } from "react";

export default function TitleChange() {
  const [text, setText] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Bir Şey Yazabilirsiniz"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Yazdığınız Yazı : {text}</p>
      
      {/* Web Sayfasinda Title Alanindaki Yaziyi Degistirmek Icin 
        Kullanicidan Data Alinma Durumuna Gore 
        Title Alanindaki Yaziyi Degistiriyoruz */}
      <input
        type="text"
        placeholder="Uygulama Başlığı Giriniz"
        onChange={(e) => setTitle(e.target.value)}
      />

    </>
  )
}