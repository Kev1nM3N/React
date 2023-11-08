import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "./firebase/init";
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import logo from './KD-Left-PNG.png'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loginButtonText, setLoginButtonText] = React.useState("Login");


  async function updatePost () {
    const hardCodedId = "nswKITQOFeazDHCAIXiu"
    const postsRef = doc(db, "posts", hardCodedId);
    const post = await getPostsById(hardCodedId)
    console.log(post)
    const newPost = {
      ...post,
      title: "SERGBALJ"
    };
    console.log(newPost)
    updateDoc(postsRef, newPost);
  }

  function deletePost () {
    const hardCodedId = "nswKITQOFeazDHCAIXiu"
    const postsRef = doc(db, "posts", hardCodedId);
    deleteDoc(postsRef)
  }


  function createPost() {
    const post = {
      title: 'finish firebase',
      description: 'america, israel, france',
      uid: user.uid,
    };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"))
    const posts = docs.map(element => ({...element.data(), id: element.id}))
    console.log(posts)
  }

  async function getPostsById (id) {
    const postsRef = doc(db, "posts", id);
    const postSnap = await getDoc(postsRef)
    return postSnap.data()
  }

  async function getPostsByUID () {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    )
    const { docs } = await getDocs(postCollectionRef)
    console.log(docs.map(doc => doc.data()))
  }


  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      if (user) {
        setUser(user);
        setLoginButtonText(user.email[0].toUpperCase());
      }
    });
  }, []);

  function register(params) {
    createUserWithEmailAndPassword(auth, "emailtails@987.com", "testSonic")
      .then(({ user }) => {
        console.log(user);
        alert(`User ${user.email} has been created!`)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logIn(params) {
    signInWithEmailAndPassword(auth, "emailtails@987.com", "testSonic")
    .then(({ user }) => {
      setUser(user);
      console.log(user);
      setLoginButtonText(user.email[0].toUpperCase());
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function logOut(params) {
    if (!user.email){
      return alert(`Already Logged Out, Please Log in`)
    }
    signOut(auth);
    setLoginButtonText(`LogIn`);
    setUser({});
    console.log(`Logged Out`)
  }

  return (
    <>
      <nav>
        <div className="left-side">
          <FontAwesomeIcon className="new__bars" icon="bars" />

          <figure>
            <img className="logo__img" src={logo}alt="" />
          </figure>
        </div>

        <div className="right-side">
          <div className="right-side__container">
            {loading ? <div className="bookbutton__skeleton"></div>: <button className="right-btn login__btn" onClick={logIn}>{loginButtonText}</button>}
            {loading ? <div className="bookbutton__skeleton"></div>: <button className="right-btn register__btn" onClick={register}>Register</button>}
            <button className="right-btn logOut__btn" onClick={logOut}>LogOut</button>
            <button onClick={createPost}>Create Post</button>
          </div>
        </div>
      </nav>
      <section>
        <h1 className="title__heading">Welcome</h1>
        {loading ? <div className="book__img--skeleton"></div> : <p>{user.email}</p>}
        <button onClick={getAllPosts} className="section__btn">Get All Posts</button>
        <button onClick={getPostsById} className="section__btn">Get ID Post</button>
        <button onClick={getPostsByUID} className="section__btn">Get UID Post</button>
        <button onClick={updatePost} className="section__btn">Update Post</button>
        <button onClick={deletePost} className="section__btn">Delete Post</button>
      </section>
    </>
  );
}

export default App;