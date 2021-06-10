import React, {useState} from 'react';
import { Redirect, Route } from 'react-router';
import {unlogin, searchUser} from '../../APIServise'
import  ListMyChallenge  from '../ListMyChallenge/ListMyChallenge';
import ListOfferChallenge from '../ListOffertChallenge/ListOffertChallenge';
import ListAcceptedChallenge from '../ListAcceptedChallenge/ListAcceptedChallenge';
import UsersWhoCompletedTheTest from '../UsersWhoCompletedTheTest/UsersWhoCompletedTheTest';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, Divider, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './MainPages.css';


export default function MainPages(){  

    let {current, setCurrent} = useState('')

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
    return(
        <div className="main-page">
            {localStorage.getItem('token')?null:<Redirect from = '/' to = '/intedification'/>}
            <div className="main-header"> 
                <div className="control-header">

                              <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                                <Menu.Item key="createChalleng" icon={<PlusCircleOutlined  twoToneColor="#52c41a"/>}>
                                    <Link to = '/createChallenge' />
                                    Создать челлендж
                                </Menu.Item>
                                
                                {/* <Menu.Item key="myChallengeCompleted" icon={<AppstoreOutlined />}>
                                    <Link to = '/myChallengeCompleted' />
                                    Мои челенджы выполнили
                                </Menu.Item>                                 */}

                              </Menu>
                    {/* <Link to='/createChallenge'><Button type="primary">Создать челлендж</Button></Link>
                    <Link to='/myAchievements'><Button type="primary">Мои достижения</Button></Link> */}
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
            {/* <Divider orientation="left" plain>Мои челенджи выполнили</Divider>
            <div>
                <UsersWhoCompletedTheTest/> 
            </div>             */}
            <Menu mode="horizontal">
                <Menu.Item key="myAchievements" icon={<AppstoreOutlined />}>
                    <Link to = '/myAchievements' />
                    Мои достижения
                </Menu.Item>
                <Menu.Item key="myChallengeCollection" icon={<AppstoreOutlined />}>
                    <Link to = '/myChallengeCollection' />
                    Моя коллекция челленджей
                </Menu.Item>
            </Menu>

        </div>

    )
}