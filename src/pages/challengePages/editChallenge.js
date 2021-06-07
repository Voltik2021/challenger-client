import React, {useEffect, useState} from 'react';
import {getChallenge, changeChalleng, deleteChallenge} from '../../APIServise';



export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});     
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let doChangeChallenge = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        changeChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'), paramsId.id)
        .then(data => {
            console.log(data);            
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
                <button onClick = {() => {window.location.href = '/'}}>Редактировать Челендж</button>            
            </form>
        </>
    )
}