import axios from 'axios';
import { useEffect } from 'react';
import { useState, createContext } from 'react';
import { BASE_URL } from '../utils/Links';

export const UserContext = createContext();

export function UserContextProvider(props) {

    /* ***************************************************************** Global states **************************************************************** */
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    /* ************************************************************************************************************************************************ */

    const logout = () => {
        setToken(null);
        setUser(null);
    }

    const contextData = {
        token,
        setToken,
        user,
        setUser,
        logout
    };
    return (
        <>
            <UserContext.Provider value={contextData}>
                {props.children}
            </UserContext.Provider>
        </>
    );
}
