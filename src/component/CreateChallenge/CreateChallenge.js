import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {createChalleng, searchUser} from '../../APIServise';
import { Form, Input, Button} from 'antd';
const { TextArea, Search } = Input;


export default function CreateChallenge() {  
    let [flagRedirect, setFlagRedirect] = useState(false)
    let [valueInput, setValueInput] = useState('')
    let [user, setUser] = useState({})

    let getUser = (value) => {

        searchUser(value).then(data => setUser(data[0]))
    }    
    
    let doCreateChalleng = (values) => {     
       
        createChalleng(values.title, values.description, values.prise, values.term, user._id||null, user.name||null)
        .then(data => {
            console.log(data);
            setFlagRedirect(true);
        })
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    return (
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
                <Input />
            </Form.Item>
            <Form.Item
                label="Награда"
                name="prise"
            >      
                <Input />
            </Form.Item>
            <Form.Item
                label="найти исполнителя"
                name="prise"
            >      
                <Search  allowClear onSearch={getUser} style={{ width: 200 }} />
            </Form.Item>
            
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Создать Челендж</Button>
            </Form.Item>

        </Form>
    )
    return (
        <>            
            <form onSubmit = {(e) => doCreateChalleng(e)}>
                <Link to = '/'>Вернуться назад</Link> <br/>                   
                <label>
                    Название челленджа          
                    <input type = 'text' name ='title'/>
                </label><br/>
                <label>
                    Описание
                    <textarea name = 'description'></textarea>
                </label> <br/>
                <label>
                    Срок исполнения
                    <input type = 'number' name = 'term'/>
                </label><br/>
                <label>
                    Награда
                    <input type = 'text' name = 'prise'/>  
                </label> <br/>        
                <label>
                    Найти исполнителя
                    <input type = 'text' onChange = {(e) => {getName(e)}}/>                  
                </label>
                <button type = 'button' onClick = {getUser} >Икать</button> <br/>
                <p>{Object.keys(user).length?`Участник: ${user.name}`:'Участник испытания не назначен'}</p>

                <button>Создать Челендж</button>
                {flagRedirect && <Redirect from = '/createChallenge' to = '/'/>}
            </form>
        </>
    )
}