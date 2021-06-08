import React, {useState, useEffect} from 'react';
import {getExecutedChallenge} from '../../APIServise';
import {Link} from 'react-router-dom';
import { List} from 'antd';
import './ListExecutedChallenge.css'




export default function ListOfferChallenge() {
    let [arrAcceptedChallenge, setArrAcceptedChallenge] = useState([]);
    

    useEffect(() => {        
        
        getExecutedChallenge().then(data => {
            console.log(data)
            setArrAcceptedChallenge(data)})       
    }, []);    

    return (
        <div className = 'listExecutedChallenge-control'>
            <Link to = '/'>Вернутся на главную</Link>
            <List
                dataSource={arrAcceptedChallenge}
                renderItem={(item) => (
                    <List.Item >
                        <List.Item.Meta
                            title={<Link to={`/executedChallenge/${item._id}`}>{item.title}</Link>}
                            description={item.description}
                        />
                        <div>Выполнено</div>
                    </List.Item>
                )}
            />
        </div>
    )


    return (
        <div>  
            <Link to = '/'>Вернуться на главную</Link>          
            <div className = 'listOfferChellenge'>
                {arrAcceptedChallenge.length&&arrAcceptedChallenge.map((item) => { return <Link to = {`/executedChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>{item.title}</Link> })}
            </div>
        </div>
    )
}