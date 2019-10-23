import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import Topbar from './Components/Topbar';
import Logo from './Components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      
      <Topbar />
      
      <Navbar />
      
      <MainSection />

    </div>
  );
}

export default App;
