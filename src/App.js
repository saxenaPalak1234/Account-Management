import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer />
      <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
