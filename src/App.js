import React, { useEffect, useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import View from './Pages/ViewPost'
import Create from './Pages/Create'
import Context, { FirebaseContext } from './store/Context';
import { AuthContext } from './store/Context';
import Post from './store/PostContext';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    // console.log(user,'<<user auth here')
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <div>
      <Post>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/view' element={<View />}></Route>

        </Routes>
      </Post>
    </div>
  );
}

export default App;
