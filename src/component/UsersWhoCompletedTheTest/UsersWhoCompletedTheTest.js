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
    )

    return (
        <div>            
            <div className = 'listOfferChellenge'>
                {arrAcceptedChallenge.length&&arrAcceptedChallenge.map((item) => { return <Link to = {`/UserCompletedMyTest/${item._id}`} key = {item._id} className ='linkChallenge'>{item.whoWasOffered} {item.title}</Link> })}
            </div>
        </div>
    )
}