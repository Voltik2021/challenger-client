import React, { useState } from 'react';
import { Link, Route} from 'react-router-dom';
import Login from '../login/login';
import Registration from '../registration/regisration'

export default function Intendification(){    

    return (        
        <div>           
            <div>
                <Link to ='/user/login'>Log in</Link>
                <Link to = '/user/registration'>Registration</Link>
            </div>
            <Route path = '/user/login'  component ={Login}/>          
            <Route path = '/user/registration' component ={Registration}/>


            <p>kfdjfkjdkfdkf</p>
            
            
        </div>
    )
}