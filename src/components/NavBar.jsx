import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

function NavBar() {
    const { authState, logout } =useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li>Home</li>
                {authState.isAuth ? (
                    <li>
                        <button onClick={logout}>Uitloggen</button>
                    </li>
                ) : (
                    <li>Login</li>
                )}
            </ul>
            {authState.isAuth && <p>Ingelogd als: "user"</p>}
        </nav>
    );
}

export default NavBar;
