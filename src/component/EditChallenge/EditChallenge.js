import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getChallenge, changeChalleng, deleteChallenge, searchUser} from '../../APIServise';
import './EditChallenge.css'
import { Form, Input, Button, DatePicker} from 'antd';
const { TextArea, Search } = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD, h:mm';
import moment from 'moment'




export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});
     let [valueInput, setValueInput] = useState('')
     let [user, setUser] = useState({})
   
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let getUser = (value) => {

        searchUser(value).then(data => setUser(data[0]))
    }
   
        

    let doChangeChallenge = (values) => {
        let term = String(values.term._d) 
        console.log(values)
        changeChalleng(values.title, values.description, values.prise, term, paramsId.id, user._id||null, user.name||null)
        .then(data => {
            console.log(data); 
            window.location.href = '/';           
        })
    }

    let doDeleteChallenge = () => {
        deleteChallenge(paramsId.id).then(() => window.location.href = '/')
    }

    const layout = {
        labelCol: { span: 12 },
        wrapperCol: { span: 12 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 10, span: 16 },
    };

    if(!Object.keys(challenge).length) return null;

    return (
        <div className = 'editChallenge-page'>
            {console.log(typeof(challenge.term))}
            <div className = 'editChallenge-color'>  
                <div className = 'editChallenge-contril'>
                <Link to = '/'>Вернуться назад</Link> 
                <Button type="default" size={'Small'} onClick ={doDeleteChallenge}>Удалить челлендж</Button>
                </div> 
                    {console.log(challenge.title)}
                    
                <Form {...layout} onFinish={doChangeChallenge} 
                    initialValues={{title: challenge.title, description: challenge.description, term: moment(challenge.term), prise: challenge.prise}}
                    >
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
                        <Button type="primary" htmlType="submit">Редактировать челендж</Button>
                    </Form.Item>
                </Form>
            </div>                         
        </div>
       
    )    
 
}