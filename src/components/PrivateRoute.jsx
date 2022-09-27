import { Navigate, useNavigate } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

function PrivateRoute({ children }) {

    const { token } = useContext(UserContext);

    const auth = token !== null;
    return (
        auth ? children : <Navigate to="/login" replace />
    );
}

export default PrivateRoute;