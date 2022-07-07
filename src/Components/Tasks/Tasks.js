import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Tasks.css'
function Home(){
    return(
        <div>
            <Navbar select={[0,1,0]} />
            <div className="body">
                <h1>Tasks</h1>
            </div>
        </div>
    );
}

export default Home;