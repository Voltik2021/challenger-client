import React from 'react';
import { Redirect } from 'react-router';

export default function CreateChallenge({doCreateChallenge, flagRedirect}) {    
    return (
        <form onSubmit = {(e) => doCreateChallenge(e)}>
            <label>
                Название челленджа          
                <input type = 'text' name ='title'/>
            </label><br/>
            <label>
                Описание
                <textarea name = 'description'></textarea>
            </label> <br/>
            <label>
                Срок исполнения
                <input type = 'number' name = 'term'/>
            </label><br/>
            <label>
                Награда
                <input type = 'text' name = 'prise'/>  
            </label> <br/>         
            <button>Создать Челендж</button>
            {flagRedirect && <Redirect from = '/createChallenge' to = '/'/>}
        </form>
    )
}