import React, {useEffect, useState} from 'react';
import {getChallenge, acceptedForCompletion, refuseExecute} from '../../APIServise';
import dayjs from 'dayjs';



export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});     
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let accepted = () => { 
        let date = dayjs().format('MMMM D, YYYY h:mm A	')
        acceptedForCompletion(paramsId.id, date)
        .then(data => {
            console.log(data);
            window.location.href = '/';            
        })
    }

    let doRefuseExecute = () => {
        refuseExecute(paramsId.id).then(data => {            
            console.log(data);
            window.location.href = '/';
        })
    }

    
    
    return (
        <>            
            <div>                              
                <h2>Название: {challenge.title}</h2>                    
                <p>Описание: {challenge.description}</p>                   
                <p>Время на исолнения (в днях): {challenge.term}</p>               
                <p> Награда: {challenge.prise}</p>                      
                <button onClick = {accepted}>Сделаю</button>
              
                    <button onClick ={doRefuseExecute} type = 'button'>Отказаться</button>
                       
            </div>
        </>
    )
}