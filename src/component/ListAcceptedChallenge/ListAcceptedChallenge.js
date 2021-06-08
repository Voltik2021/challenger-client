import React, {useState, useEffect} from 'react';
import {getAcceptedChallenge} from '../../APIServise';
import {Link} from 'react-router-dom';




export default function ListOfferChallenge() {
    let [arrAcceptedChallenge, setArrAcceptedChallenge] = useState([]);
    

    useEffect(() => {        
        
        getAcceptedChallenge().then(data => {
            console.log(data)
            setArrAcceptedChallenge(data)})       
    }, []);    

    return (
        <div>            
            <div className = 'listOfferChellenge'>
                {arrAcceptedChallenge.length&&arrAcceptedChallenge.map((item) => { return <Link to = {`/acceptedChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>{item.title}</Link> })}
            </div>
        </div>
    )
}