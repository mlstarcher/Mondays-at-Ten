import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    console.log('signup ', email, password)
    createUserWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   setCurrentUser(user)
      //   // ...
      // })
      // .catch((error) => {
      //   console.log('error: ', error)
      //   // const errorCode = error.code;
      //   // const errorMessage = error.message;
      //   // ..
      // });
    return;
  }

  function login(email, password) {
    console.log('log in: ', email, password)
    signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   setCurrentUser(user)
    //   console.log('log in current user: ', JSON.stringify(currentUser))
    //   // ...
    // })
    // .catch((error) => {
    //   console.log('error: ', error)
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    //   // ..
    // });
    return;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
