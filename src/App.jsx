import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

export default function () {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/sign-in' Component={SignIn}/>
    <Route exact path='/sign-up' Component={SignUp }/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/profile' Component={Profile}/>
  </Routes>
  </BrowserRouter>
}
