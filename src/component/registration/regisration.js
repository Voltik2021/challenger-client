import React from 'react';
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

    let doRegistration = ({ login, password, name }) => {
        registation(login, password, name)
        .then(data => console.log(data))
        .catch(err => console.log(err))        
    }

    return (
        <Form {...layout} onFinish={doRegistration}>
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