import React, {useState, useEffect} from 'react';
import { Link, Route} from 'react-router-dom';
import {createChalleng, getMyChallenge} from '../../APIServise';
import CreateChallenge from '../CreateChallenge/CreateChallenge';
import './listMyChelenge.css';



export default function ListMyChallenge() {
    let [arrChallenge, setArrChallenge] = useState([]);
    let [flagRedirect, setFlagRedirect] = useState(false)

    useEffect(() => {        
        if (!flagRedirect) {
            getMyChallenge().then(data => setArrChallenge(data))
        }
    }, [flagRedirect]);

    let doCreateChalleng = (e) => {
        e.preventDefault();
        setFlagRedirect(true);
        let data = new FormData(e.target);
        createChalleng(data.get('title'), data.get('description'), data.get('prise'), data.get('term'))
        .then(data => {
            console.log(data);
            setFlagRedirect(false);
        })
    }

    return (
        <div>
            <Link to ='/createChallenge'>Создать челендж</Link>
            <Route path = '/createChallenge'><CreateChallenge flagRedirect = {flagRedirect} doCreateChallenge = {doCreateChalleng} /></Route>
            <div className = 'listMyChelenge'>
                {arrChallenge.length&&arrChallenge.map((item) => { return <Link to = {`/myChalenge/${item._id}`} key = {item._id} className ='linkChalenge'>{item.title}</Link> })}
            </div>
        </div>
    )

}