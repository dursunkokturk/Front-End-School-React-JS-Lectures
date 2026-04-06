export default function App() {
  const isLogin = false;
  return (
    <>
      <h1>Hello React World</h1>
      <MyButton />
      <Profile />
      {isLogin ? <Admin /> : <Login />}
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