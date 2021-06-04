import React from 'react';
import {useState, useEffect} from 'react'
import { Route } from 'react-router';
import Intendification from '../intendification/intendification'


export default function App(){
    let [checkLogin, setCheckLogin] = useState('');

    useEffect(()=>{
        setCheckLogin(localStorage.getItem('token'))
    },[])

    let unlogin = () => {
        setCheckLogin(null);
        localStorage.setItem('token', '')
        
    }

    return(
        <div>
            {    console.log(typeof(checkLogin) )}
            {checkLogin?<button onClick = {unlogin}>Выйти</button>:<Intendification/>}
        </div>

    )
}