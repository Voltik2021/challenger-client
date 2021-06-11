import React, {useState} from 'react';
import { Redirect} from 'react-router';
import {unlogin} from '../../APIServise'
import ListOfferChallenge from '../ListOffertChallenge/ListOffertChallenge';
import ListAcceptedChallenge from '../ListAcceptedChallenge/ListAcceptedChallenge';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, Divider, Menu } from 'antd';
import {AppstoreOutlined, EditFilled, PlusCircleOutlined, SafetyCertificateFilled} from '@ant-design/icons';
import './MainPages.css';
const {SubMenu} = Menu;


export default function MainPages(){  

    let [current, setCurrent] = useState('')

    let handleClick = (e) => {
        setCurrent(e.key) 
    }

    let doUnlogin = () => {
        unlogin().then(() => {
            localStorage.setItem('token', '');
            window.location.href = '/intedification'
        })  
        
    }   
    
    
    let date1 = dayjs().format('MMMM D, YYYY h:mm A	')
    console.log(date1)
    console.log(dayjs(date1).subtract(1, 'day'))
    return(
        <div className="main-page">
            {localStorage.getItem('token')?null:<Redirect from = '/' to = '/intedification'/>}
            <div className="main-header"> 
                <div className="control-header">
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu key="SubMenu" icon={<EditFilled />} title="Действия">                       
                            <Menu.Item key="createChalleng" icon={<PlusCircleOutlined  />}>
                                <Link to = '/createChallenge' />
                                    Создать челлендж
                            </Menu.Item>
                            <Menu.Item key="myChallengeCollection" icon={<AppstoreOutlined />}>
                                <Link to = '/myChallengeCollection' />
                                Моя коллекция челленджей
                            </Menu.Item>
                            <Menu.Item key="myAchievements" icon={<SafetyCertificateFilled />}>
                                <Link to = '/myAchievements' />
                                    Мои достижения
                            </Menu.Item>
                            <Menu.Item key="myChallengeCompleted" icon={<PlusCircleOutlined />}>
                                <Link to = '/myChallengeCompleted' />
                                    Мои челленджи выполнили
                            </Menu.Item>
                        </SubMenu> 
                    </Menu>                   
                </div>
                <Button onClick = {doUnlogin}>Выйти</Button>
            </div>
            <Divider orientation="left" plain>Приняты к исполнению</Divider>
            <div>
                <ListAcceptedChallenge/> 
            </div>
            <Divider orientation="left" plain>Предложенные челенджи</Divider>
            <div>
                <ListOfferChallenge/>     
            </div>  
        </div>

    )
}