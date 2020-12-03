import React, {useEffect, useState} from 'react';
import "./style.css";
import {Link} from "react-router-dom";

export default () => {
      const [bgHeader, setBgHeader] = useState(false);


        useEffect(() => {
            const scrollListener = () => {
            window.scrollY > 10 ? setBgHeader(true) : setBgHeader(false);
            };
        
            window.addEventListener("scroll",scrollListener);
        
            return () => {
            window.removeEventListener("scroll",scrollListener);
            }
    }, [])

    return (
        <header className={bgHeader ? "bg-black" : undefined}>
            <div className="header-logo">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </Link>
            </div>
            <div className="header-user">
                <Link to="#">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="user" />
                </Link>
            </div>
        </header>
    )
}