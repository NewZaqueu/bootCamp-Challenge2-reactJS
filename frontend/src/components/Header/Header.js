import React from 'react'
import './style.css'
import {FaGithubAlt, FaKeyboard} from 'react-icons/fa'
export default function Header(){
    return(
        <header>
            <a href="" id="logo"><FaGithubAlt/><span><FaKeyboard/></span></a>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </header>
    )
}