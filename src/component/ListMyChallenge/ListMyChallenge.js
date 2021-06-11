import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import { getMyChallenge} from '../../APIServise';
import './listMyChelenge.css';
import { List} from 'antd';


export default function ListMyChallenge() {
    let [arrChallenge, setArrChallenge] = useState([]);
    

    useEffect(() => {        
        
        getMyChallenge().then(data => setArrChallenge(data))
       
    }, []);  
    
    

    return (
        <div className = 'list-control'>
            <Link to = '/'>Вернутся на главную</Link>
            <List
                dataSource={arrChallenge}
                renderItem={(item) => (
                    <List.Item >
                        <List.Item.Meta
                            title={<Link to={`/myChallenge/${item._id}`}>{item.title}</Link>}
                            description={item.description}
                        />
                        <div>
                            {item.status === 'suggested'?`Предложен: ${item.whoWasOffered}`:null}
                            {item.status === 'accepted'?`Принял к исполнению: ${item.whoWasOffered}`:null}
                            {item.status === 'expired'?`${item.whoWasOffered} не успел выполнить`:null}
                            {item.status === 'rejected'?`${item.whoWasOffered} отказался выполнять`:null}
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )    
}