import { useEffect, useState } from "react";

export default function UseEffectDependenciesTitleChange() {

  const [title, setTitle] = useState('');

  {/* Web Sayfasinda Title Alanindaki Yaziyi Degistirmek Icin 
    Kullanicidan Data Alinmadi Ise Belirlenen Yaziyi Yazdiriyoruz 
    Kullanicidan Data Alindi Ise Title Alanina Yaziyi Degistiriyoruz */}
  useEffect(() => {
    document.title = title ? `Uygulama Adı : ${title}` : `React Uygulaması`;
  }, [title])

  return (
    <>
    </>
  )
}