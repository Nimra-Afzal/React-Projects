// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <div className='body'>
      <Router>
        <Navbar title="TextUtils" AboutUs="AboutUs" home="Home" Search="Search" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* why use exact coz 
            /user --> component1
            /user/home --> component2
            means k user/home pa bi jna hu to wo component1 pa la jay ga is lia use exact */}
            <Route exact path="/about" element={<About  mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="All-in-One Text Utility" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
