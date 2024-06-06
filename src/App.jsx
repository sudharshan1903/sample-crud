import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx';

function App() {

  return (
    <>
    <ToastContainer />
   
     <Routes>
         <Route exact path="/" element={<Login />}/>
         <Route path="/register" element={<SignUp />}/>
         <Route path='/Homepage' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
