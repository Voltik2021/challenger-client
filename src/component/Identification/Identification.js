import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Regisration'

import './identification.css';

import { Space, Divider, Card } from 'antd';

export default function Intendification(){    

    return (        
        <div className="identification-page">
            <Card style={{width: '320px'}}>
                <div className="identification-controls">
                    <Link to ='/intedification/login'>Вход</Link>
                    <Link to = '/intedification/registration'>Регистрация</Link>
                </div>
                <Divider />
                <div>
                    <Switch>
                        <Route path = '/intedification/login' component ={Login}/>                  
                        <Route path = '/intedification/registration' component ={Registration}/>
                    </Switch>  
                </div>
            </Card>
        </div>
    )
}