import React from 'react';
import {useState, useEffect} from 'react'
import { Redirect, Route } from 'react-router';
import {unlogin, searchUser} from '../../APIServise'
import  ListMyChallenge  from '../ListMyChallenge/ListMyChallenge';
import ListOfferChallenge from '../ListOffertChallenge/ListOffertChallenge';
import ListAcceptedChallenge from '../ListAcceptedChallenge/ListAcceptedChallenge';
import ListExecutedChallenge from '../ListExecutedChallenge/ListExecutedChallenge';
import UsersWhoCompletedTheTest from '../UsersWhoCompletedTheTest/UsersWhoCompletedTheTest';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';



export default function MainPages(){     

    let doUnlogin = () => {
        unlogin().then(() => {
            localStorage.setItem('token', '');
            window.location.href = '/intedification'
        })  
        
    }    
    let date1 = dayjs().format('MMMM D, YYYY h:mm A	')
    console.log(date1)
    return(
        <div>            
            {localStorage.getItem('token')?null:<Redirect from = '/' to = '/intedification'/>}
            <Link to ='/myAchievements'>Мои достижения</Link>
            <div>                
                <button onClick = {doUnlogin}>Выйти</button>
            </div>     
            <div>
                <p>Приняты к исполнению</p>
                <ListAcceptedChallenge/> 
            </div>            
            <div>
            <p>Предложенные челенджи</p>
                <ListOfferChallenge/>     
            </div>            
            <div>
                <p>Коллекция челенджей</p>
                <ListMyChallenge/> 
            </div>
            <div>
                <p>Мои челенджи выполнили</p>
                <UsersWhoCompletedTheTest/> 
            </div>
            
        </div>

    )
}