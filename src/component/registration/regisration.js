import React from 'react';
import {registation} from '../../APIServise'

export default function Registration(){

    let doRegistration= (e) => {
        e.preventDefault()
        let data = new FormData(e.target);

        registation(data.get('login'), data.get('password'), data.get('name'))
        .then(data => console.log(data))
        .catch(err => console.log(err))        
    }
    return (
        <form onSubmit = {(e) => doRegistration(e)}>
            <label>
                Login
                <input type = 'text' name = 'login' />
            </label>
            <label>
                Password
                <input type = 'password' name = 'password'/>
            </label>
            <label>
                Name
                <input type = 'text' name = 'name'/>
            </label>
            <button >Зарегистрироваться</button>    
        </form>
    )
}