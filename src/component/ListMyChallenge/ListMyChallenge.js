import React, {useState, useEffect} from 'react';
import { Link, Route} from 'react-router-dom';
import {createChalleng, getMyChallenge} from '../../APIServise';
import CreateChallenge from '../CreateChallenge/CreateChallenge';
import './listMyChelenge.css';
import { List} from 'antd';


export default function ListMyChallenge() {
    let [arrChallenge, setArrChallenge] = useState([]);
    

    useEffect(() => {        
        
        getMyChallenge().then(data => setArrChallenge(data))
       
    }, []);  
    
    

    return (
        <List
            dataSource={arrChallenge}
            renderItem={(item) => (
                <List.Item >
                    <List.Item.Meta
                        title={<Link to={`/myChallenge/${item._id}`}>{item.title}</Link>}
                        description={item.description}
                    />
                    <div>{item.status === 'suggested'?`Предложен: ${item.whoWasOffered}`:null}
                        {item.status === 'accepted'?`Принял к исполнению: ${item.whoWasOffered}`:null}
                    </div>
                </List.Item>
            )}
        />
    )

    return (
        <div>
            
            <div className = 'listMyChelenge'>
                {arrChallenge.length&&arrChallenge.map((item) => { 
                    return <Link to = {`/myChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>
                        {item.title}
                        {`   ${item.status}`}
                        </Link> })}
            </div>
        </div>
    )
}