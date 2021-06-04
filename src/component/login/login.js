import React from 'react';

export default function Login(){
    return (
        <form>
            <label>
                Login
                <input type = 'text' name='login'/>
            </label>
            <label>
                Password
                <input type = 'password' name='password'/>
            </label>
            <button>Войти</button>    

        </form>
    )
}