import React from 'react';
import {useState, useEffect} from 'react'
import { Route } from 'react-router';
import Intendification from '../intendification/intendification'
import {login, unlogin} from '../../APIServise'
import { Link } from 'react-router-dom';
import  ListMyChallenge  from '../ListMyChallenge/ListMyChallenge';
import editChallenge from '../../pages/challengePages/editChallenge'


export default function App(){
    let [checkLogin, setCheckLogin] = useState('');

    useEffect(()=>{
        setCheckLogin(localStorage.getItem('token'))
    },[])

    let doUnlogin = () => {
        unlogin().then(data => console.log(data))
        setCheckLogin(null);        
        localStorage.setItem('token', '') 

    }
    let doLogin = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)

        login(data.get('login'), data.get('password')).then(data => {
            setCheckLogin(data)            
            localStorage.setItem('token', data)})
    }

    return(
        <div>
            <div>                
                {checkLogin?<Link to = '/' onClick = {doUnlogin}>Выйти</Link>:<Intendification doLogin = {doLogin}/>}
            </div>
            {checkLogin?<ListMyChallenge/>:null}
        
            <Route path = '/myChalenge/:id' exact component = {editChallenge} />
        </div>

    )
}