import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Signin from '../src/context/AuthContext';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
