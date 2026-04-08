import { useState } from "react";

export default function CounterIncreaseDecrease() {
  return (
    <>
      <Counter />
      <Counter1 />
    </>
  )
}

function Counter() {

  // count : Yapilacak Islemin Atandigi Degisken
  // setCount : count Degiskeni Uzerinden Yapilan Islemin Guncel Halini Barindiran Kisim
  // useState : count Degiskeninin Baslangic Degerini Barindiran Hook
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  return (
    <>
      {/* <button onClick={handleIncrease}>Tıkla {count}</button> */}
      <button onClick={handleDecrease} disabled={count === 0}>-</button>
      <button>Sayaç {count}</button>
      <button onClick={handleIncrease}>+</button>
    </>
  )
}

// Sayi Artirma Ve Azaltma Islemi Icin 
// Arrow Function Kullaniyoruz
function Counter1() {

  // count : Yapilacak Islemin Atandigi Degisken
  // setCount : count Degiskeni Uzerinden Yapilan Islemin Guncel Halini Barindiran Kisim
  // useState : count Degiskeninin Baslangic Degerini Barindiran Hook
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <button onClick={handleIncrease}>Tıkla {count}</button> */}
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
      <button>Sayaç {count}</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}