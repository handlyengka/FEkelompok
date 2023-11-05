import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Api from './components/Api';


const App =()=> {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      <Api/>
    </>
  );
};


export default App
