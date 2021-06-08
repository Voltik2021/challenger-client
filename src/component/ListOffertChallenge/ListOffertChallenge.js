import React, {useState, useEffect} from 'react';
import {getOfferChallenge, acceptedForCompletion, refuseExecute} from '../../APIServise';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

import { List, Button } from 'antd';


export default function ListOfferChallenge() {
    let [arrOfferChallenge, setArrOfferChallenge] = useState([]);
    

    useEffect(() => {            
        getOfferChallenge().then(data => {
            console.log(data)
            setArrOfferChallenge(data)})
    }, []);

    let accepted = (id) => { 
        let date = dayjs().format('MMMM D, YYYY h:mm A	')
        acceptedForCompletion(id, date)
        .then(() => {
            window.location.href = '/';            
        })
    }

    let doRefuseExecute = (id) => {
        refuseExecute(id).then(() => {            
            window.location.href = '/';
        })
    }

    return (
        <List
            dataSource={arrOfferChallenge}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button onClick={() => { accepted(item._id) }}>Принять</Button>,
                        <Button onClick={() => { doRefuseExecute(item._id) }}>Отказаться</Button>
                    ]}
                >
                    <List.Item.Meta
                        title={<Link to={`/offerChallenge/${item.id}`}>{item.title}</Link>}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    )
}