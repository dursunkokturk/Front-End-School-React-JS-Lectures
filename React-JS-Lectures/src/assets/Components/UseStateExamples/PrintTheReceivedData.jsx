import { useState } from "react";

export default function PrintTheReceivedData() {
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
    </>
  )
}