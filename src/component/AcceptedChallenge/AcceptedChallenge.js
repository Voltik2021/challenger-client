import React, {useEffect, useState} from 'react';
import {getChallenge, executedChallenge, refuseExecute} from '../../APIServise';
import dayjs from 'dayjs';
import {Button} from 'antd';
import './AcceptedChallenge.css'
import {Link} from 'react-router-dom';

export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});
     let [checkTime, setCheckTime] = useState(false)       
    
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => {
            let test = dayjs().isAfter(dayjs(data.term))
            setCheckTime(test)
            setChallenge(data)})
    }, [])

    let executed = () => { 
        let date1 = dayjs().format('MMMM D, YYYY h:mm A')
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
                    <p className = {checkTime?'time-color':''}>Успеть до: {`${test.$D}/${test.$M}/${test.$y}, ${test.$H}.${test.$m}`}</p>               
                    <p> Награда: {challenge.prise}</p>                      
                    {!checkTime?<Button type = 'primory' onClick = {executed}>Я Сделал</Button>:null}              
                    {!checkTime?<Button type = 'primory' onClick ={doRefuseExecute} type = 'button'>Отказаться</Button>:null}
                    {checkTime?<Button type = 'primory' onClick ={doRefuseExecute} type = 'button'>Я не успел</Button>:null}
                </div> 
            </div>
        </>
    )
}