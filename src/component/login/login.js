import React from 'react';
import { Redirect } from 'react-router';
import {login} from '../../APIServise';

export default function Login(){
    
 
    let doLogin = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)

        login(data.get('login'), data.get('password')).then(data => { 
            if (typeof(data) === 'string')                       
            localStorage.setItem('token', data)
            window.location.href = '/';  
        })
            .catch(err => console.log(err))
    }
    return (
        <div>            
            <form onSubmit = {(e) => doLogin(e)}>            
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
        </div>
    )
}