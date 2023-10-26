import React, { createContext, useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ isAuth: false, user: '' });
const navigate = useNavigate();
    const login = (username,password) => {
        setAuthState({...authState, isAuth: true});
        console.log("Gebruiker is ingelogd");
        navigate("/profile");

    }

    const handleLogout = () => {
        setAuthState({ isAuth: false, user: ''});
    };

    return (
        <AuthContext.Provider value={{ authState, login: login, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;