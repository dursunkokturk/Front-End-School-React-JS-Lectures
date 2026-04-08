import { useState } from "react";

export default function ShowHide() {

  // state : mevcut değer
  // setState : değeri güncelleyen fonksiyon
  // initialValue : başlangıç değeri (sayı, string, bool, array, obj olabilir)
  // const [state, setState] = useState(initialValue);

  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Göster' : 'Gizle'}</button>
      {
        isVisible && <p>Merhaba Ben Görünüyorum</p>
      }
    </>
  )
}