import React from 'react';

export default function Login(props){
    return (
        <form onSubmit = {(e) => props.doLogin(e)}>            
            <label>
                Login
                <input type = 'text' name='login'/>
            </label>
            <label>
                Password
                <input type = 'password' name='password'/>
            </label>
            <button >Войти</button>    

        </form>
    )
}