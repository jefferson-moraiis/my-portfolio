import React from "react"
import './styles.css'


export default function Header(){
    
    return(
        <header className="header">
            <nav className="menu-nav">
                <a href="/" >Jefferson Morais</a>
                <div className="list">
                    <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li >
                        <a href="/works">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            Contact
                        </a>
                    </li>
                    </ul>
                    <div  className="btn-close">
                    <i className="fas fa-times nav__close" id="nav-close"></i>
                    </div>
                </div>
                <div className="nav-btns">
                    <span >
                    <i className="change-theme far fa-moon"></i>
                    </span>
                    <div>
                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ui-svg-inline"><path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"></path></svg>
                    </div>
                </div>
            </nav>
        </header>
    )
}