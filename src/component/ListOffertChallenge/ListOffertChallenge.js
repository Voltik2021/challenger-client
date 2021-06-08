import React, {useState, useEffect} from 'react';
import {getOfferChallenge} from '../../APIServise';
import {Link} from 'react-router-dom';




export default function ListOfferChallenge() {
    let [arrOfferChallenge, setArrOfferChallenge] = useState([]);
    

    useEffect(() => {        
        
        getOfferChallenge().then(data => {
            console.log(data)
            setArrOfferChallenge(data)})
       
    }, []);    

    return (
        <div>            
            <div className = 'listOfferChelenge'>
                {arrOfferChallenge.length&&arrOfferChallenge.map((item) => { return <Link to = {`/offerChallenge/${item._id}`} key = {item._id} className ='linkChallenge'>{item.title}</Link> })}
            </div>
        </div>
    )
}