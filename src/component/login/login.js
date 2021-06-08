import { Form, Input, Button } from 'antd';
import React from 'react';
import { Redirect } from 'react-router';
import {login} from '../../APIServise';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default function Login(){
    let doLogin = (values) => {
        login(values.login, values.password).then(data => { 
            if (typeof(data) === 'string') {
                localStorage.setItem('token', data)
                window.location.href = '/';  
            }                     
        })
        .catch(err => console.log(err));
    }

    return (
        <Form {...layout} onFinish={doLogin}>
            <Form.Item
                label="Логин"
                name="login"
            >
                
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
            >
                
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Войти</Button>
            </Form.Item>
        </Form>
    )


    return (
        <div>            
            <form onSubmit = {(e) => doLogin(e)}>            
                <label>
                    Login
                    <input type = 'text' name='login'/>
                </label>
                <label>
                    Password
                    <input type = 'password' name='password'/>
                </label>
                <button >Войти</button>    

            </form>
        </div>
    )
}