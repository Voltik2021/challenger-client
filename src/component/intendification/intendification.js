import React, { useState } from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Registration from '../registration/regisration'

export default function Intendification(){    

    return (        
        <div>           
            <div>
                <Link to ='/intedification/login'>Log in</Link>
                <Link to = '/intedification/registration'>Registration</Link>
            </div>
            <Switch>
                <Route path = '/intedification/login' component ={Login}/>                  
                <Route path = '/intedification/registration' component ={Registration}/>
            </Switch>
            
            
            
        </div>
    )
}