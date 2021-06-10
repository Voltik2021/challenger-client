import React, {useEffect, useState} from 'react';
import {getChallenge, createChalleng, searchUser} from '../../APIServise';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs'
import './ExecutedChallenge.css'
import { Form, Input, Button, DatePicker} from 'antd';
const { TextArea, Search } = Input;
const dateFormat = 'YYYY/MM/DD, h:mm';
import moment from 'moment'



export default function editChallenge({match}) { 
    let paramsId = match.params   
     let [challenge, setChallenge] = useState({}); 
     let [flag, setFlag] = useState(false) 
     let [valueInput, setValueInput] = useState('')
     let [user, setUser] = useState({})   
    useEffect(() => {          
               
        getChallenge(paramsId.id).then(data => setChallenge(data))
    }, [paramsId])

    let addMyCollection = () => { 
        setFlag(true)       
    }  

    let doCreateChalleng = (values) => {             
        let term = String(values.term._d) 
        createChalleng(values.title, values.description, values.prise, term, user._id||null, user.name||null)
        .then(data => {
            console.log(data);
            window.location.href = '/'           
        })
    }  

    let getUser = (value) => {
        

        searchUser(value).then(data => setUser(data[0]))
    }

    

    const layout = {
        labelCol: { span: 12 },
        wrapperCol: { span: 12 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 10, span: 16 },
    };
    let test = dayjs(challenge.term)
    
    
    return (
        <div className = 'executedCallenge-page'>   
                <Link to = '/'>Вернуться на главную</Link> <br/>
            {!flag? <div className = 'acceptedChallenge-page' >             
                        <div>     
                        <Link to = '/'>Вернуться на главную</Link> <br/>                           
                            <h2>Название: {challenge.title}</h2>                    
                            <p>Описание: {challenge.description}</p>                   
                            <p>Выполнить до: {`${test.$D}/${test.$M}/${test.$y}, ${test.$H}.${test.$m}`}</p>               
                            <p> Награда: {challenge.prise}</p>                      
                            <Button type = 'primory' onClick = {addMyCollection}>Редактировать и добавить в коллекцию</Button>              
                            
                        </div> 
                    </div>
                    :
                    null        
        }      
            {flag? <div className = 'editChallenge-page'>
            {console.log(typeof(challenge.term))}
            <div>  
                <div className = 'editChallenge-contril'>
                    <Link to = '/'>Вернуться назад</Link>                    
                    </div> 
                        {console.log(challenge.title)}
                        
                    <Form {...layout} onFinish={doCreateChalleng} 
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
                            <Button type="primary" htmlType="submit">Создать челлендж</Button>
                        </Form.Item>
                    </Form>
                </div>                         
            </div>
                    :
                    null        
        }   
            
        </div>
    )
}

