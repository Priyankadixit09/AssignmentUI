import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header';
import SideNav from './Components/sidebar/SideNav';
import Footer from './Components/Footer';
import Form from './Components/Form';



function App() {


  return (
    <div className="App">
      <Header />
      <div className='app'>
        <SideNav />
        <Form />
      </div>

      <Footer />
    </div>
  )
}

export default App;
