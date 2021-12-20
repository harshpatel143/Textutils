import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



function App() {
  
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#144a6a';
      showAlert("Dark mode has been enable","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
    }
  }
return (
  <>
      <React.Fragment>
  <Router>
    <Navbar title="Textutils" about="AboutUs" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
          <Route exact path="/about"  element={< About />}>
          </Route>
          <Route exact path="/"  element={<TextForm heading="Enter The Text"  mode={mode}  showAlert={showAlert} />}>
          </Route>
    </Routes>

       </div>
  </Router>
       </React.Fragment>
  </>
);
}

export default App;
