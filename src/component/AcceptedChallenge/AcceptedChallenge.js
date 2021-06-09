import React, {useEffect, useState} from 'react';
import {getChallenge, executedChallenge, refuseExecute} from '../../APIServise';
import dayjs from 'dayjs';
import {Button} from 'antd';
import './AcceptedChallenge.css'
import {Link} from 'react-router-dom';

export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});       
    
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [])

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
    let test = dayjs(challenge.term)
    

    return (
        
        <>            
            <div className = 'acceptedChallenge-page' > 
            
                <div>     
                <Link to = '/'>Вернуться на главную</Link> <br/>                           
                    <h2>Название: {challenge.title}</h2>                    
                    <p>Описание: {challenge.description}</p>                   
                    <p>Успел до: {`${test.$D}/${test.$M}/${test.$y}, ${test.$H}.${test.$m}`}</p>               
                    <p> Награда: {challenge.prise}</p>                      
                    <Button type = 'primory' onClick = {executed}>Я Сделал</Button>              
                    <Button type = 'primory' onClick ={doRefuseExecute} type = 'button'>Отказаться</Button>
                </div> 
            </div>
        </>
    )
}