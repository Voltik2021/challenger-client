import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {createChalleng, searchUser} from '../../APIServise';
import dayjs from 'dayjs';

export default function CreateChallenge() {  
    let [flagRedirect, setFlagRedirect] = useState(false)
    let [valueInput, setValueInput] = useState('')
    let [user, setUser] = useState({})

    let getUser = () => {

        searchUser(valueInput).then(data => setUser(data[0]))
    }

    let getName = (e) => {
        setValueInput(e.target.value)
    }
    
    let doCreateChalleng = (e) => {
        e.preventDefault();
        let date = dayjs().format('DD/MM/YYYY')
        console.log(user)
        let data = new FormData(e.target);
        createChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'), user._id||null, user.name||null, )
        .then(data => {
            console.log(data);
            setFlagRedirect(true);
        })
    }
    return (
        <>            
            <form onSubmit = {(e) => doCreateChalleng(e)}>
                <Link to = '/'>Вернуться назад</Link> <br/>                   
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
                <p>{Object.keys(user).length?`Участник: ${user.name}`:'Участник испытания не назначен'}</p>

                <button>Создать Челендж</button>
                {flagRedirect && <Redirect from = '/createChallenge' to = '/'/>}
            </form>
        </>
    )
}