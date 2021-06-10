import React, {useEffect, useState} from 'react';
import {getChallenge, acceptedForCompletion, refuseExecute} from '../../APIServise';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import './OfferChallenge.css'


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

    let test = dayjs(challenge.term)
    
    return (
        
        <>            
            <div className = 'acceptedChallenge-page' > 
            
                <div className = 'offerChallenge-control'>     
                <Link to = '/'>Вернуться на главную</Link> <br/>                           
                    <h2>Название: {challenge.title}</h2>                    
                    <p>Описание: {challenge.description}</p>                   
                    <p>Успел до: {`${test.$D}/${test.$M}/${test.$y}, ${test.$H}.${test.$m}`}</p>               
                    <p> Награда: {challenge.prise}</p>                      
                    <Button type = 'primory' onClick = {accepted}>Сделаю</Button>              
                    <Button type = 'primory' onClick ={doRefuseExecute} type = 'button'>Отказаться</Button>
                </div> 
            </div>
        </>
    ) 
}