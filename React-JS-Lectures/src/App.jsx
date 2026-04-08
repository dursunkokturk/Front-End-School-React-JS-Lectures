import { useEffect, useState } from "react";
import Hi from "./assets/Components/Hi";
import MyApp from "./assets/Components/MyApp";

export default function App() {
  const isLogin = true;

  // state : mevcut değer
  // setState : değeri güncelleyen fonksiyon
  // initialValue : başlangıç değeri (sayı, string, bool, array, obj olabilir)
  // const [state, setState] = useState(initialValue);

  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  document.body.className = theme;

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.body.className = newTheme;
  }

  const fruits = ["elma", "armut", "çilek", "karpuz", "kavun"];
  const fruits2 = [
    {
      id: 1, name: "Ejder Meyvesi"
    },
    {
      id: 2, name: "Tropikal Meyve"
    },
    {
      id: 3, name: "Üzüm"
    }
  ];

  const [recipes, setRecipes] = useState([]);

  {/* 
    // useEffect Genel Kullanimi
    useEffect(()=>{
      // Yapilacak Islemlerin Yazilacagi Alan
    })
  */}

  {/* 
    // Her Zaman Calisir
    useEffect(()=>{
      
    })
  */}

  {/* 
    // Sadece Sayfa Ilk Calistirildinda Calisir
    // dependency Bos
    useEffect(() => {

    }, [])
  */}

  {/* 
    // dependency Uzerinden 
    // Kullanicidan Gelen Data Degistigi Surece Calisir
    useEffect(() => {

    }, [x])
  */}

  // useEffect Genel Kullanimi
  useEffect(() => {
    console.log("useEffect Hook Kullanımı")
  })

  // useEffect ve Dependency Birlikte Kullanimi Sonucunda
  // Sadece Bir Kez Calisacak
  useEffect(() => {
    console.log("useEffect Hook ve Dependency Kullanımı")
  }, [])

  {/* Web Sayfasinda Title Alanindaki Yaziyi Degistirmek Icin 
    Kullanicidan Data Alinmadi Ise Belirlenen Yaziyi Yazdiriyoruz 
    Kullanicidan Data Alindi Ise Title Alanina Yaziyi Degistiriyoruz */}
  useEffect(() => {
    document.title = title ? `Uygulama Adı : ${title}` : `React Uygulaması`;
  }, [title])

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())

      // Api Uzerinden Gelen Cevabi Console Ekraninda Kontrol Ediyoruz 
      // .then(console.log)
      .then((data) => {
        setRecipes(data.recipes);
      })
  },[])

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode a Geç' : 'Light Mode a Geç'}
      </button>
      <h1>Hello React World</h1>
      <MyButton />
      <Profile />
      {isLogin ? <Admin /> : <Login />}
      <Counter />
      <Hi />
      <MyApp />
      <br />
      <br />
      <br />
      <Counter1 />
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="Bir Şey Yazabilirsiniz"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Yazdığınız Yazı : {text}</p>
      <br />
      <br />
      <br />
      <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Göster' : 'Gizle'}</button>
      {
        isVisible && <p>Merhaba Ben Görünüyorum</p>
      }
      <br />
      <br />
      <br />

      {/* Array Icindeki Data'lari Yazdirirken 
        Key Hatasi Almamak Icin 
        Array Icindeki Data'lari Yazdirirken 
        Index Degerini Kullaniyoruz  */}
      <ul>
        {
          fruits.map((fruit, i) => (
            <li key={i}>{fruit}</li>
          ))
        }
      </ul>
      <ul>
        {
          fruits2.map((fruits2) => (
            <li key={fruits2.id}>{fruits2.name}</li>
          ))
        }
      </ul>

      <br />
      <br />
      <br />

      {/* Web Sayfasinda Title Alanindaki Yaziyi Degistirmek Icin 
        Kullanicidan Data Alinma Durumuna Gore 
        Title Alanindaki Yaziyi Degistiriyoruz */}
      <input
        type="text"
        placeholder="Uygulama Başlığı Giriniz"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />
      <br />

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.name}</h4>
          <p>Tarif: {recipe.ingredients}</p>
          <p>{recipe.cuisine}</p>
        </div>
      ))}
    </>
  )
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