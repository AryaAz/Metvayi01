import React from 'react';

const Login = () => {
    function login() {
        localStorage.setItem("token", "d5s658d6s8d54789d547s89d654789d")
    }

    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    );
};

export default Login;
