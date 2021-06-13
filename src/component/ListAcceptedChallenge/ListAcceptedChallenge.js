import React, {useState, useEffect} from 'react';
import {getAcceptedChallenge, executedChallenge, refuseExecute, expiredChallenge} from '../../APIServise';
import './ListAcceptedChallenge.css';

import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

import { List, Button } from 'antd';

export default function ListOfferChallenge() {
    let [arrAcceptedChallenge, setArrAcceptedChallenge] = useState([]);
    
    useEffect(() => {        
        
        getAcceptedChallenge().then(data => {           
            setArrAcceptedChallenge(data)})       
    }, []);

    let executed = (id) => { 
        let date1 = dayjs().format('MMMM D, YYYY h:mm A	')
        executedChallenge(id, date1)
        .then(() => { 
            window.location.href = '/';           
        })
    }

    let doRefuseExecute = (id) => {
        refuseExecute(id).then(() => {
            window.location.href = '/';
        })
    } 

    let doExpiredChallenge = (id) => {
        expiredChallenge(id).then(() =>  window.location.href = '/')
    }
   

    return (
        <List
            dataSource={arrAcceptedChallenge}
            renderItem={(item) => { 
                let dateFormat = dayjs(item.term)   
                let dailyWarning = dayjs().isAfter(dayjs(dayjs(dateFormat).subtract(1, 'day')))                             
                return !dayjs().isAfter(dayjs(item.term))?
                <List.Item
                    actions={[
                        <Button onClick={() => { executed(item._id) }}>Выполнил</Button>,
                        <Button onClick={() => { doRefuseExecute(item._id) }}>Отказаться</Button>
                    ]}
                >
                    <List.Item.Meta
                        title={<Link to={`/acceptedChallenge/${item._id}` } style={{ "color": `${dailyWarning?"blueviolet":null}` }}>{item.title}{`.${dailyWarning?' (Остался 1 день)':''}`}</Link>}
                        description={item.description}                                              
                    />                      
                </List.Item>
                : 
                <List.Item
                    actions={[
                        <Button onClick={() => { doExpiredChallenge(item._id) }}> Я не успел</Button>                        
                    ]}
                >
                    <List.Item.Meta 
                        
                        title={<Link to={`/acceptedChallenge/${item._id}`} style={{ "color": "red" }} >{item.title}. (Надо было успеть до: {` ${dateFormat.format('DD/MM/YYYY HH:mm')}`})</Link>}
                        description={item.description}  
                                                                    
                    />                      
                </List.Item>
            }}
        />
    ) 
}