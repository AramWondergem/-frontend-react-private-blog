import React from 'react';
import {useNavigate} from "react-router-dom";


function Login({toggleIsAuth}) {
    const navigate = useNavigate();

    function pushButton() {
        toggleIsAuth(true);
        navigate("/")
    }
    return (
        <>
            <h1>Login pagina</h1>
            <p>druk op de knop om in te loggen</p>
            <button type="button" onClick={pushButton}>Inloggen</button>
        </>
    );
}

export default Login;