export default function AdminAndLogin() {
  const isLogin = false;
  return (
    <>
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