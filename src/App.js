import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const[mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#4B6E91";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
    <Navbar title="TextForge" mode={mode} togglemode={togglemode}/>
    <Textform header="Enter the text" mode={mode} togglemode={togglemode}/>
    </>
    
  );
}

export default App;
