import React, {useState, useEffect} from 'react';
import {getExecutedChallenge} from '../../APIServise';
import {Link} from 'react-router-dom';




export default function ListOfferChallenge() {
    let [arrAcceptedChallenge, setArrAcceptedChallenge] = useState([]);
    

    useEffect(() => {        
        
        getExecutedChallenge().then(data => {
            console.log(data)
            setArrAcceptedChallenge(data)})       
    }, []);    

    return (
        <div>  
            <Link to = '/'>Вернуться на главную</Link>          
            <div className = 'listOfferChellenge'>
                {arrAcceptedChallenge.length&&arrAcceptedChallenge.map((item) => { return <Link to = {`/executedChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>{item.title}</Link> })}
            </div>
        </div>
    )
}