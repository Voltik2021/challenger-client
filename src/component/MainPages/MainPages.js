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
import { Button, Divider } from 'antd';

import './MainPages.css';


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
        <div className="main-page">
            {localStorage.getItem('token')?null:<Redirect from = '/' to = '/intedification'/>}
            <div className="main-header"> 
                <div className="control-header">               
                    <Link to='/createChallenge'><Button type="primary">Создать челлендж</Button></Link>
                    <Link to='/myAchievements'><Button type="primary">Мои достижения</Button></Link>
                </div>
                <Button onClick = {doUnlogin}>Выйти</Button>
            </div>
            <Divider orientation="left" plain>Приняты к исполнению</Divider>
            <div>
                <ListAcceptedChallenge/> 
            </div>
            <Divider orientation="left" plain>Предложенные челенджи</Divider>
            <div>
                <ListOfferChallenge/>     
            </div>
            <Divider orientation="left" plain>Коллекция челенджей</Divider>
            <div>
                <ListMyChallenge/> 
            </div>
            <Divider orientation="left" plain>Мои челенджи выполнили</Divider>
            <div>
                <UsersWhoCompletedTheTest/> 
            </div>            
        </div>

    )
}