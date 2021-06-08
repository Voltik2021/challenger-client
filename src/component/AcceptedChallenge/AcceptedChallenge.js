import React, {useEffect, useState} from 'react';
import {getChallenge, executedChallenge, refuseExecute} from '../../APIServise';
import dayjs from 'dayjs'


export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});     
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let executed = () => { 
        let date1 = dayjs().format('MMMM D, YYYY h:mm A	')
        console.log(date1)
        executedChallenge(paramsId.id, date1)
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
                <button onClick = {executed}>Я Сделал</button>
              
                    <button onClick ={doRefuseExecute} type = 'button'>Отказаться</button>
                       
            </div>
        </>
    )
}