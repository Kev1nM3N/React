import './App.css';
import React from 'react';
import KDLogo from './assets/KD-Logo.png'
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Nav from './components/Nav';
import Firsthalf from './components/Firsthalf';
import Secondhalf from './components/Secondhalf';

function App() {
  const [user1, setUser1] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [buttonText, setButtonText] = React.useState('Login')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')
  let emailStore = document.querySelector('input[type="email"]');
  let passwordStore = document.querySelector('input[type="password"]');
  //email@email123.com or welcome@123.com
  //123Password or digimon

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser1(user)
      }
    })
  }, [])

  function register() {
    console.log(`registered`);
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
      emailStore.value = '';
      passwordStore.value = '';
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
    .then((existingUser) => {
      setButtonText(existingUser.user.email[0].toUpperCase())
      setUser1(existingUser.user)
      emailStore.value = '';
      passwordStore.value = '';
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logOut(params) {
    if (!user1.email) {
      return alert('Already logged out, please log back in')
    }

    console.log(`loggedout`);
    signOut(auth)
    setUser1({})
    setButtonText(`Login`)
  }

    
  return (
    <>
      <Nav KDLogo={KDLogo} logIn={logIn} buttonText={buttonText} register={register}/>

      <main className='text-center' style={{height: "calc(100vh - 75px)"}}>
          <div className='h-full max-w-[600px] mx-auto'>
            <Firsthalf logOut={logOut}/>
            <Secondhalf  loading={loading} user1={user1} setEmail={setEmail} setPassword={setPassword}/>
          </div>
      </main>
    </>
  );
}

export default App;
