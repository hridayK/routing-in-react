import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
function Home(){
    return(
        <div>
            <Navbar select={[0,0,1]} />
            <div className="body">
                <h1>About</h1>
            </div>
        </div>
    );
}

export default Home;