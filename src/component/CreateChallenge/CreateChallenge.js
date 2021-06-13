import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {createChalleng, searchUser, getUserId} from '../../APIServise';
import dayjs from 'dayjs'
import { Form, Input, Button, DatePicker, Select} from 'antd';
const { Option } = Select;
import './CreateChallenge.css';
const { TextArea, Search } = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD, h:mm';


export default function CreateChallenge() {  
    let [flagRedirect, setFlagRedirect] = useState(false)
    let [valueInput, setValueInput] = useState('')
    let [users, setUsers] = useState([])
    let [oneUser, setOneUser] = useState({})

    let getUser = (value) => {
        
        searchUser(value).then(data => {
            console.log(data)
            setUsers(data)})
    }    

    let changeValue = (value, q) => {
        console.log(q)
        setValueInput(value)
        getUserId(q.key).then(data => {
            console.log(data, '2222222')
            setOneUser(data)})
    }
    
    let doCreateChalleng = (values) => { 
        let term = String(values.term._d)  
        console.log(values)
       
        createChalleng(values.title, values.description, values.prise, term, oneUser._id||null, oneUser.name||null)
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

    const options = users.map(item => <Option key={item._id} value= {`логин: ${item.login} имя:${item.name}`}> {'логин: '} {item.login}<br/> {`имя:${item.name}`}</Option>);
    return (        
        <div className = 'createChallenge-page'>  
        {console.log(oneUser, 'create')}          
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
                        <Select 
                            dropdownMatchSelectWidth = {200} 
                            listHeight={250}
                            showSearch
                            value={valueInput}
                            placeholder={'введите имя или логин'}
                            // style={}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            onSearch={getUser}
                            onChange={changeValue}
                            notFoundContent={null}
                        >{options}</Select>
                      
                    </Form.Item>
                    <p>{valueInput?`Участник: ${valueInput}`:'Участник испытания не назначен'}</p>
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Создать Челендж</Button>
                    </Form.Item>
                </Form>
            </div>                         
        </div>
       
    )   
}