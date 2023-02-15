import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../images/logo.png';
const Header=()=>{
    
    return(
        <div>
           <img src={logo} alt='logo'/>
        </div>
    )
}

export default Header