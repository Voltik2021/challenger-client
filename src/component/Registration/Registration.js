import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import {registation} from '../../APIServise'
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function Registration(){
    let [flag, setFlag] = useState(false)

    let doRegistration = ({ login, password, name }) => {
        registation(login, password, name)
        .then(() => setFlag(true))
        .catch(err => console.log(err))        
    }

    return (
        <Form {...layout} onFinish={doRegistration}>
            {flag?<Redirect from='/intedification/registration' to = '/intedification/login'/>:null}
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

            <Form.Item
                label="Имя"
                name="name"
            >
                
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
            </Form.Item>
        </Form>
    );
}