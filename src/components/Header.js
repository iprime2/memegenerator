import React from "react";
import meme_logo from './meme-logo.png';

export default function header(){
    return(
        <header className="header--main">
            <img src={meme_logo} alt='logo' className="header--logo"/>
            <p className="header--title">MEME GENRATOR</p>
            <div className="wrap-text">
                <p className="header--text">React Course-Project 3</p>
            </div>
        </header>
    )
}