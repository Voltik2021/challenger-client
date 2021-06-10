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
            renderItem={(item) => ( !dayjs().isAfter(dayjs(item.term))?
                <List.Item
                    actions={[
                        <Button onClick={() => { executed(item._id) }}>Выполнил</Button>,
                        <Button onClick={() => { doRefuseExecute(item._id) }}>Отказаться</Button>
                    ]}
                >
                    <List.Item.Meta
                        title={<Link to={`/acceptedChallenge/${item._id}`}>{item.title}</Link>}
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
                        title={<Link to={`/acceptedChallenge/${item._id}`}>{item.title}</Link>}
                        description={item.description}                                              
                    />                      
                </List.Item>
            )}
        />
    )

    return (
        <div>            
            <div className = 'listOfferChellenge'>
                {arrAcceptedChallenge.length&&arrAcceptedChallenge.map((item) => { return <Link to = {`/acceptedChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>{item.title}</Link> })}
            </div>
        </div>
    )
}