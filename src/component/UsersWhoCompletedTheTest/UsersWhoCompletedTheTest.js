import React, {useState, useEffect} from 'react';
import {getUserCompletedMyTest} from '../../APIServise';
import {Link} from 'react-router-dom';
import { List} from 'antd';



export default function ListOfferChallenge() {
    let [arrAcceptedChallenge, setArrAcceptedChallenge] = useState([]);
    

    useEffect(() => {        
        
        getUserCompletedMyTest().then(data => {
            console.log(data)
            setArrAcceptedChallenge(data)})       
    }, []);  
    
    return (       
        <div className = 'list-control'>
            <Link to = '/'>Вернутся на главную</Link>
            <List
                dataSource={arrAcceptedChallenge}
                renderItem={(item) => (
                    <List.Item >
                        <List.Item.Meta
                            title={<Link to={`/executedChallenge/${item._id}`}>{item.title}</Link>}
                            description={item.description}
                        />
                        <div>Выполнено {item.whoWasOffered}</div>
                    </List.Item>
                )}
            /> 
        </div>      
    )
   
}