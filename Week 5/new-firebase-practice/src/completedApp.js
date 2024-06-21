import './App.css';
import React from 'react';
import KDLogo from './assets/KD-Logo.png'
import { auth, db } from './firebase/init';
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Nav from './components/Nav';
import Firsthalf from './components/Firsthalf';
import Secondhalf from './components/Secondhalf';
import { getAll } from 'firebase/remote-config';

/**
 * This file is only for answers and reference.
 * This file is not intended to be used.
 */

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
  //newgen@webhook.com  69Password?
 

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser1(user)
        setButtonText(user.email[0].toUpperCase());
      }
    })
  }, [])

  async function updatePost(params) {
    const hardCodedId = 'XEXxwcuWfyO7Yl7g3c7R'
    const postRef = doc(db, "posts", hardCodedId);
    const post = await getPostsById(hardCodedId)
    console.log(post);
    const newPost = {
      ...post, //if you ever want to only change one proprty, you use the spread operator and then the property you want to change.
      title: "More casual now"
    };
    console.log(newPost);
    updateDoc(postRef, newPost)
  }

  function deletePost(params) {
    const hardCodedId = 'XEXxwcuWfyO7Yl7g3c7R'
    const postRef = doc(db, "posts", hardCodedId);
    deleteDoc(postRef);
  }

  function createPost(params) {
      const post = {
          title: "finish the firebase section and strike!",
          desc: "Hoorah!",
          uid: user1.uid,
      }
      addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts () {
      const { docs } = await getDocs(collection(db, "posts"))
      const posts = docs.map(element => ({...element.data(), id: element.id})); //spread operator returns a copy of the object
      console.log(posts);
  }

  async function getPostsById(id) {
    const postRef = doc(db, "posts", id);
    const postSnap = await getDoc(postRef);
    return postSnap.data()
  }

  async function getPostsByUID(params) {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user1.uid)
    );
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map(element => element.data()));
  }

  function register2 (){
    setLoading(true)
    register()
  }

  function register() {
    console.log(`registered`);
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setLoading(false)
      console.log(user);
      emailStore.value = '';
      passwordStore.value = '';
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logIn2 (){
    setLoading(true) //I thought I didn't need to hard code this, but doing so worked.
    logIn()
  }

  function logIn() {
    signInWithEmailAndPassword(auth, 'email@email123.com', '123Password')
    .then((existingUser) => {
      setLoading(false)
      setButtonText(existingUser.user.email[0].toUpperCase())
      console.log(existingUser.user.email);
      setUser1(existingUser.user)
      emailStore.value = '';
      passwordStore.value = '';
      logOut(existingUser)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logOut(existingUser) {
    console.log(existingUser);
    if (!user1.email) {
      return null
    }

    console.log(`loggedout`);
    signOut(auth)
    setUser1({})
    setButtonText(`Login`)
  }

    
  return (
    <>
      <Nav KDLogo={KDLogo} logIn2={logIn2} buttonText={buttonText} loading={loading} register2={register2}/>
      <main className='text-center' style={{height: "calc(100vh - 75px)"}}>
          <div className='h-full max-w-[600px] mx-auto'>
            <Firsthalf />
            <Secondhalf  loading={loading} user1={user1} setEmail={setEmail} setPassword={setPassword}/>
            <button onClick={createPost}>Create Post</button>
            <button onClick={getAllPosts}>Get all Posts</button>
            <button onClick={getPostsById}>Get Posts By ID</button>
            <button onClick={getPostsByUID}>Get Posts By UID</button>
            <button onClick={updatePost}>Update Post</button>
            <button onClick={deletePost}>Delete Post</button>
          </div>
      </main>
    </>
  );
}

export default App;