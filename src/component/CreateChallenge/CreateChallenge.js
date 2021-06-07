import React, {useState} from 'react';
import { Redirect } from 'react-router';
import {createChalleng, searchUser} from '../../APIServise';

export default function CreateChallenge() {  
    let [flagRedirect, setFlagRedirect] = useState(false)
    let [valueInput, setValueInput] = useState('')
    let [user, setUser] = useState({})

    let getUser = () => {

        searchUser(valueInput).then(data => setUser(data))
    }

    let getName = (e) => {
        setValueInput(e.target.value)
    }
    
    let doCreateChalleng = (e) => {
        e.preventDefault();
        
        let data = new FormData(e.target);
        createChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'), user[0]._id, user[0].name)
        .then(data => {
            console.log(data);
            setFlagRedirect(true);
        })
    }
    return (
        <>            
            <form onSubmit = {(e) => doCreateChalleng(e)}>                    
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
                <label>
                    Найти исполнителя
                    <input type = 'text' onChange = {(e) => {getName(e)}}/>                  
                </label>
                <button type = 'button' onClick = {getUser} >Икать</button> <br/>

                <button>Создать Челендж</button>
                {flagRedirect && <Redirect from = '/createChallenge' to = '/'/>}
            </form>
        </>
    )
}