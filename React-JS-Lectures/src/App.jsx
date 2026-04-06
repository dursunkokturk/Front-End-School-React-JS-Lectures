export default function App() {
  return (
    <>
      <h1>Hello React World</h1>
      <MyButton />
      <Profile />
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