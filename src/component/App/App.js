import React from 'react';
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router';
import Intendification from '../intendification/intendification'
import {login, unlogin} from '../../APIServise'
import { Link } from 'react-router-dom';
import  ListMyChallenge  from '../ListMyChallenge/ListMyChallenge';
import editChallenge from '../../pages/challengePages/editChallenge'
import MainPages from '../MainPages/MainPages'
import CreateChallenge from '../CreateChallenge/CreateChallenge'


export default function App(){
   

    return(
        <Switch>
            <Route path ='/' exact component = {MainPages}/>
            <Route path = '/intedification' component = {Intendification} />
            <Route path = '/myChalenge/:id' component = {editChallenge} />
            <Route path = '/createChallenge' component = {CreateChallenge} />    
            
        </Switch>

    )
}