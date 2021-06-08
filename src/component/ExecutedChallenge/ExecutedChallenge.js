import React, {useEffect, useState} from 'react';
import {getChallenge, createChalleng, searchUser} from '../../APIServise';
import {Link} from 'react-router-dom';



export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({}); 
     let [flag, setFlag] = useState(false) 
     let [valueInput, setValueInput] = useState('')
     let [user, setUser] = useState({})   
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let addMyCollection = () => { 
        setFlag(true)       
    }  

    let doCreateChalleng = (e) => {
        e.preventDefault();       
        let data = new FormData(e.target);
        createChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'), user._id||null, user.name||null)
        .then(data => {
            console.log(data);
            window.location.href = '/'           
        })
    }  

    let getUser = () => {

        searchUser(valueInput).then(data => setUser(data[0]))
    }

    let getName = (e) => {
        setValueInput(e.target.value)
    }

    
    
    return (
        <>   
                <Link to = '/'>Вернуться на главную</Link> <br/>
            {!flag? <div>                              
                        <h2>Название: {challenge.title}</h2>                    
                        <p>Описание: {challenge.description}</p>                   
                        <p>Время на исолнения (в днях): {challenge.term}</p>               
                        <p> Награда: {challenge.prise}</p>                      
                        <button onClick = {addMyCollection}>Редактировать и добавить в коллекцию</button>    
                    </div>
                    :
                    null        
        }      
            {flag? <form onSubmit = {(e) => doCreateChalleng(e)}>
                                           
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
                        <button type = 'button' onClick = {getUser} >Искать</button> <br/>
                        <p>{Object.keys(user).length?`Участник: ${user.name}`:'Участник испытания не назначен'}</p>

                        <button>Создать Челендж</button>                        
                    </form>
                    :
                    null        
        }   
            
        </>
    )
}