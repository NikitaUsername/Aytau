import React from 'react';
import logo from '../images/logotipAytau.jpg';
import '../less/header.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function DefaultHeader(props) {
    return (
        <div className="container header">
            <div className="row header__title">
                <div className="col-lg-5">
                    <p className='headerTitleContainer__text mx-auto'>
                        АЙТАУ КЛУБ, ГОРНЫЙ АЛТАЙ, ЧЕМАЛ
                    </p>
                </div>
            </div>
            <div className="row navigationContainer">
                <div className="col-lg-3  navigationContainer__logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="col-lg-8 ms-auto navigationContainer__navigation">
                    <nav className='ms-auto' >
                        <Link to="/">ГЛАВНАЯ</Link>
                        <a href="#">ШАЛЕ</a>
                        <a href="#">ГАЛЕРЕЯ</a>
                        <a href="#">СТРЕЛКОВЫЙ КЛУБ</a>
                        <a href="#">КОНТАКТЫ</a>
                        <Link to="/booking">ЗАЯВКА НА АРЕНДУ</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default DefaultHeader;