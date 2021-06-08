import React, {useEffect, useState} from 'react';
import {getChallenge, changeChalleng, deleteChallenge, searchUser} from '../../APIServise';



export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});
     let [valueInput, setValueInput] = useState('')
     let [user, setUser] = useState({})
   
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let getUser = () => {

        searchUser(valueInput).then(data => setUser(data[0]))
    }

    let getName = (e) => {
        setValueInput(e.target.value)
    }     

    let doChangeChallenge = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        changeChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'), paramsId.id, user._id||null, user.name||null)
        .then(data => {
            console.log(data); 
            window.location.href = '/';           
        })
    }

    let doDeleteChallenge = () => {
        deleteChallenge(paramsId.id).then(() => window.location.href = '/')
    }
    
    return (
        <>
            <div>
                <button onClick ={doDeleteChallenge}>Удалить</button>
            </div>
            <form onSubmit = {(e) => doChangeChallenge(e)}>            
                <label>
                    Название челленджа          
                    <input type = 'text' name ='title' defaultValue = {challenge.title}/>
                </label><br/>
                <label>
                    Описание
                    <textarea name = 'description' defaultValue = {challenge.description}></textarea>
                </label> <br/>
                <label>
                    Срок исполнения
                    <input type = 'number' name = 'term' defaultValue = {challenge.term}/>
                </label><br/>
                <label>
                    Награда
                    <input type = 'text' name = 'prise' defaultValue = {challenge.prise}/>  
                </label> <br/>   
                <label>
                    Найти исполнителя
                    <input type = 'text' onChange = {(e) => {getName(e)}}/>                  
                </label>
                <button type = 'button' onClick = {getUser} >Икать</button> <br/>
                <p>{Object.keys(user).length?`Участник: ${user.name}`:'Участник испытания не назначен'}</p>

                <button>Редактировать Челендж</button>            
            </form>
        </>
    )
}