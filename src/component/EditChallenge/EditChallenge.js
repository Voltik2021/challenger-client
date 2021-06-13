import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getChallenge, changeChalleng, deleteChallenge, searchUser, getUserId} from '../../APIServise';
import './EditChallenge.css'
import { Form, Input, Button, DatePicker,  Select} from 'antd';
const { Option } = Select;
const { TextArea, Search } = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD, h:mm';
import moment from 'moment'




export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({});
     let [valueInput, setValueInput] = useState('')
     let [users, setUsers] = useState([])
     let [oneUser, setOneUser] = useState({})
   
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

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
        

    let doChangeChallenge = (values) => {
        let term = String(values.term._d) 
        console.log(values)
        changeChalleng(values.title, values.description, values.prise, term, paramsId.id, oneUser._id||null, oneUser.name||null)
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

    const options = users.map(item => <Option key={item._id} value= {`логин: ${item.login} имя:${item.name}`}> {'логин: '} {item.login}<br/> {`имя:${item.name}`}</Option>);
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
                        <Button type="primary" htmlType="submit">Редактировать челендж</Button>
                    </Form.Item>
                </Form>
            </div>                         
        </div>
       
    )    
 
}