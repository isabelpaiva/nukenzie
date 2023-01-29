import React from "react";

import nukenzielogo from '../../assets/nukenzielogo.svg'
import HomePage from "../../pages/HomePage";

import './index.css';

const Header = ({setPagePrincipal}) =>{
    
    return (
        <div className='container-header'>
           <img src={nukenzielogo} alt="logo" />
            <button className="btnInicio" onClick={() => setPagePrincipal(true)}>Início</button>
        </div>
    );
};

export default Header;