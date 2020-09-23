import React from 'react';
import Sidebar from "./Sidebar"
import Mainbar from "./Mainbar"


function Home() {
    return (
        <div>
            <div className="container">
                <div className="App">
                    <Sidebar />
                    <Mainbar />
                </div>
            </div>
        </div>
    );
}

export default Home;
