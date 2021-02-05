import React from 'react';
import img from "../images/anaTertu.png";

function Slogan(){
    return(
        <div>
            <img src={img} alt="" width="100px"/>
            <p>
                Bem vindos ao desenvolvimento fullstack de <code>AnaTertu</code>.
            </p>
        </div>
    )
}

export default Slogan;