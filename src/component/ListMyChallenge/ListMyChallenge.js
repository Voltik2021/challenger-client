import React, {useState, useEffect} from 'react';
import { Link, Route} from 'react-router-dom';
import {createChalleng, getMyChallenge} from '../../APIServise';
import CreateChallenge from '../CreateChallenge/CreateChallenge';
import './listMyChelenge.css';



export default function ListMyChallenge() {
    let [arrChallenge, setArrChallenge] = useState([]);
    

    useEffect(() => {        
        
        getMyChallenge().then(data => setArrChallenge(data))
       
    }, []);    

    return (
        <div>
            <Link to ='/createChallenge'>Создать челендж</Link>
            
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