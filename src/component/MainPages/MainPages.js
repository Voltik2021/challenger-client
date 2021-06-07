import React from 'react';
import {useState, useEffect} from 'react'
import { Redirect, Route } from 'react-router';
import Intendification from '../intendification/intendification'
import {unlogin, searchUser} from '../../APIServise'
import { Link } from 'react-router-dom';
import  ListMyChallenge  from '../ListMyChallenge/ListMyChallenge';
import editChallenge from '../../pages/challengePages/editChallenge';



export default function MainPages(){   
    

    let doSearchUser = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)       
        searchUser(data.get('user')).then(data => console.log(data))
    }

    let doUnlogin = () => {
        unlogin().then(data => console.log(data))  
        localStorage.setItem('token', '') 
    }    

    return(
        <div>
            {localStorage.getItem('token')?null:<Redirect from = '/' to = '/intedification'/>}
            <div>                
                <button onClick = {doUnlogin}>Выйти</button>
            </div>
            <form onSubmit = {(e) => {doSearchUser(e)}} >
                <label>
                    Найти исполнителя
                    <input type = 'text'  name = 'user' />
                    <button> Искать</button>
                </label>
            </form>
            <ListMyChallenge/>        
            
        </div>

    )
}