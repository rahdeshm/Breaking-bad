import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../images/logo.png';
const Header=()=>{
    
    return(
        <header className="center">
           <img src={logo} alt='logo'/>
        </header>
    )
}

export default Header