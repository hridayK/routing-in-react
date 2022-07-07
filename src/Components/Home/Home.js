import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
function Home(){
    return(
        <div>
            <Navbar select={[1,0,0]} />
            <div className="body">
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;