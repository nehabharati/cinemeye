import React from 'react';
import Sidebar from "./Sidebar"
import TVMainbar from "./TVMainbar"


function TV() {
    return (
        <div>
            <div className="container">
                <div className="App">
                    <Sidebar />
                    <TVMainbar />
                </div>
            </div>
        </div>
    );
}

export default TV;
