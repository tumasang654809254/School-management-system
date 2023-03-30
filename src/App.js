import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom'

import { useTranslation } from "react-i18next";


import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const {t} = useTranslation()

  const [open, setOpen] = useState('false');
  const [open1, setOpen1] = useState('false')
  const [open2, setOpen2] = useState("false")

  let refOpen = useRef();
  let refOpen1 = useRef();
  let refOpen2 = useRef();
 
//FOR THE DROPDOWN MENU ONLY
  useEffect(()=>{
    let handler = (e)=>{
      if(!refOpen.current.contains(e.target)){
        setOpen(true);
        console.log(refOpen.current)
      }
    };
    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  });
  

  //FOR THE DROPDOWM MESSAGES ONLY
  useEffect(()=>{
    let handler = (e)=>{
      if(!refOpen1.current.contains(e.target)){
        setOpen1(true);
        console.log(refOpen1.current)
      }
    };
    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  });


  //FOR THE DROPDOWNNOTIFICATIONS ONLY
  useEffect(()=>{
    let handler = (e)=>{
      if(!refOpen2.current.contains(e.target)){
        setOpen2(true);
        console.log(refOpen2.current)
      }
    };
    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  });

  




  return (
    <div className="App">

      <Router>
         <Sidebar />
      </Router>
      <Header  
      open={open}
      setOpen={setOpen}
      open1={open1}
      setOpen1={setOpen1}
      open2={open2}
      setOpen2={setOpen2}
      refOpen={refOpen}
      refOpen1={refOpen1}
      refOpen2={refOpen2}
      />  
    </div>
  );
}

export default App;
