import { useState } from "react";

export default function App() {
  const isLogin = true;
  return (
    <>
      <h1>Hello React World</h1>
      <MyButton />
      <Profile />
      {/* <Admin /> */}
      {/* <Login /> */}
      {isLogin ? <Admin /> : <Login />}
      <Counter />
    </>
  )
}

function Counter() {

  // count Yapilacak Islemin Atandigi Degisken
  // setCount count Degiskeni Uzerinden Yapilan Islemin Guncel Halini Barindiran Kisim
  // useState count Degiskeninin Baslangic Degerini Barindiran Hook
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

function MyButton() {
  return (
    <>
      <button>Tıkla</button>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function Admin() {
  return (
    <>
      <h2>Admin Sayfası</h2>
      <p>Hoş Geldin Admin</p>
    </>
  )
}

function Login() {
  return (
    <>
      <h2>Kayıt Sayfası</h2>
      <form action="">
        <input type="text" placeholder="Kullanıcı Adı" />
        <br />
        <input type="password" placeholder="Kullanıcı Şifresi" />
        <br />
        <button>Giriş Yap</button>
      </form>
    </>
  )
}