import React, { useState } from "react";
import './Navbar.css'
import PropTypes from 'prop-types';

function Navbar(props){

    let [select, setSelect] = useState([0,0,0]);
    let setConfig = {
        0:"nav-element",
        1:"navbar-select"
    };

    let names = ["nav-element","nav-element","nav-element"];
    for(let i=0;i<props.select.length;i++){
        if(props.select[i]===1){
            names[i] = setConfig[1];
        }else{
            names[i] = setConfig[0];
        }
    }

    return (
        <div className="navbar">

            <div className={names[0]}>
                <a id="0" href="/">Home</a>
            </div>

            <div className={names[1]}>
                <a id="1" href="/tasks">Tasks</a>
            </div>

            <div className={names[2]}>
                <a id="2" href="/about">About</a>
            </div>
            
        </div>
    );
}

Navbar.defaultProps = {
    select: "1"
};

Navbar.propTypes = {
    select: PropTypes.string.isRequired,
};

export default Navbar;