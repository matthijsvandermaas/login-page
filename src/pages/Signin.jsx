import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/AuthContext';

function SignIn() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function isHandleClick(e){
        e.preventDefault();
        login();
    }


    return (
        <div>
            <input
                type="text"
                placeholder="Gebruikersnaam"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type = "button" onClick={isHandleClick}>Inloggen</button>
        </div>
    );
}

export default SignIn;
