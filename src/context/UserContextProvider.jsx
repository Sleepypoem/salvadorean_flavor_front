import { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {

    /* ***************************************************************** Global states **************************************************************** */
    const [token, setToken] = useState(null);

    /* ************************************************************************************************************************************************ */

    const contextData = {
        token,
        setToken
    };
    return (
        <>
            <UserContext.Provider value={contextData}>
                {props.children}
            </UserContext.Provider>
        </>
    );
}
