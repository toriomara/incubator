import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i1.sndcdn.com/artworks-000219558910-9m8ygm-t500x500.jpg" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login}</div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header
