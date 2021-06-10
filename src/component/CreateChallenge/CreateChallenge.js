import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {createChalleng, searchUser} from '../../APIServise';
import dayjs from 'dayjs'
import { Form, Input, Button, DatePicker} from 'antd';
import './CreateChallenge.css';
const { TextArea, Search } = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD, h:mm';


export default function CreateChallenge() {  
    let [flagRedirect, setFlagRedirect] = useState(false)
    let [valueInput, setValueInput] = useState('')
    let [user, setUser] = useState({})

    let getUser = (value) => {
        
        searchUser(value).then(data => setUser(data[0]))
    }    
    
    let doCreateChalleng = (values) => { 
        let term = String(values.term._d)  
        console.log(values)
       
        createChalleng(values.title, values.description, values.prise, term, user._id||null, user.name||null)
        .then(data => {
            console.log(data);
            setFlagRedirect(true);
        })
    }

    const layout = {
        labelCol: { span: 12 },
        wrapperCol: { span: 12 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 10, span: 16 },
    };


    return (
        <div className = 'createChallenge-page'>
            {flagRedirect?<Redirect from='/createChallenge' to = '/'/>:null}
            <div className = 'createChallenge-page-control'>   
            <Link to = '/'>Вернуться назад</Link> 
                <Form {...layout} onFinish={doCreateChalleng}>
                    <Form.Item
                        label="Название челленджа"
                        name="title"
                    >                        
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Описание"
                        name="description"
                    >                
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        label="Срок исполнения"
                        name="term"
                    >                 
                        <DatePicker showTime format={dateFormat}/>               
                    </Form.Item>
                    <Form.Item
                        label="Награда"
                        name="prise"
                    >      
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Найти исполнителя"
                        name="search"
                    >      
                        <Search  allowClear onSearch={getUser} style={{ width: 200 }} />
                    </Form.Item>
                    <p>{Object.keys(user).length?`Участник: ${user.name}`:'Участник испытания не назначен'}</p>
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Создать Челендж</Button>
                    </Form.Item>
                </Form>
            </div>                         
        </div>
       
    )   
}