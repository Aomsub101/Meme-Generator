import React from "react"
import trollfaceIcon from "../images/troll-face.png"

function Header(){
    return(
        <header className="header">
            <img src={trollfaceIcon} alt="troll face icon." className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--project">React Course - Project 3</p>
        </header>
    )
}

export default Header

