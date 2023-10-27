import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#2e2e2e';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled.","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#2e2e2e';
      showAlert("Dark mode has been disabled.","success");
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        }/>
        <Route exact path="/about" element={
          <About/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;