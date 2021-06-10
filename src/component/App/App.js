import React from 'react';
import { Route, Switch } from 'react-router';
import Identification from '../Identification/Identification';
import EditChallenge from '../EditChallenge/EditChallenge';
import MainPages from '../MainPages/MainPages';
import CreateChallenge from '../CreateChallenge/CreateChallenge';
import OfferChallenge from '../OfferChallenge/OfferChallenge';
import AcceptedChallenge from '../AcceptedChallenge/AcceptedChallenge';
import ExecutedChallenge from '../ExecutedChallenge/ExecutedChallenge';
import UserComplited from '../UserComplited/UserComplited';
import ListExecutedChallenge from '../ListExecutedChallenge/ListExecutedChallenge';

export default function App(){  

    return(
        <Switch>
            <Route path ='/' exact component = {MainPages}/>
            <Route path = '/intedification' component = {Identification} />
            <Route path = '/myChallenge/:id' component = {EditChallenge} />
            <Route path = '/createChallenge' component = {CreateChallenge} />  
            <Route path = '/offerChallenge/:id' component = {OfferChallenge} /> 
            <Route path = '/acceptedChallenge/:id' component = {AcceptedChallenge} />
            <Route path = '/executedChallenge/:id' component = {ExecutedChallenge} />
            <Route path = '/UserCompletedMyTest/:id' component = {UserComplited} />
            <Route path = '/myAchievements' component = {ListExecutedChallenge} />
        </Switch>

    )
}