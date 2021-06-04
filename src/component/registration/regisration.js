import React from 'react';

export default function Registration(){
    return (
        <form>
            <label>
                Login
                <input type = 'text' />
            </label>
            <label>
                Password
                <input type = 'password'/>
            </label>
            <label>
                Name
                <input type = 'password'/>
            </label>
            <button>Зарегистрироваться</button>    
        </form>
    )
}