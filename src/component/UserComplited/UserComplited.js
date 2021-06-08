import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getChallenge, executedChallenge, refuseExecute} from '../../APIServise';


export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});     
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId]) 

     
    return (
        <>            
            <div>  
                <Link to='/'>Вернуться на главную</Link>
                <h1>Челендж выполнил: {challenge.whoWasOffered}</h1>                           
                <h2>Название: {challenge.title}</h2>                    
                <p>Описание: {challenge.description}</p>                   
                <p>Время на исолнения (в днях): {challenge.term}</p>               
                <p> Награда: {challenge.prise}</p>                       
            </div>
        </>
    )
}