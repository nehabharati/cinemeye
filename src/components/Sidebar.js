import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faFilm, faVideo, faTheaterMasks, faRunning, faCat, faStar, faUserAlt, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5rem" }} onClick={() => setOpen(!open)} className="hamburger" />
            {open ? (
                <div className="responsive-navbar">
                    <div className="title">
                        <img src={require("../images/logo.svg")} alt="Logo" style={{ width: "50px" }} />
                        <h3>Cinemeye</h3>
                    </div>
                    <FontAwesomeIcon icon={faTimes} style={{ position: "absolute", top: "0", right: "0", fontSize: "1.5rem", margin: "1em 2em" }} onClick={() => setOpen(!open)} />
                    <section className="sidebar-content">
                        <p>Categories</p>
                        <ul>
                            <li><FontAwesomeIcon className="icons" icon={faHome} /><span>Main page</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faTv} /><span>TV-channels</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faFilm} /><span>Movies</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faVideo} /><span>Series</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faTheaterMasks} /><span>Concerts</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faRunning} /><span>Sports</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faCat} /><span>For kids</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faRunning} /><span>Sports</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faStar} /><span>Favorites</span></li>
                            <li><FontAwesomeIcon className="icons" icon={faUserAlt} /><span>Personal data</span></li>
                        </ul>
                    </section>

                    <section className="download-options">
                        <p>Enjoy your favorite movies,concerts and TV channels in our application!</p>
                        <img src={require("../images/app-store-badge.svg")} alt="app store" style={{ width: "100px" }} />
                        <img src={require("../images/google-play-badge.svg")} alt="Google play" style={{ width: "100px" }} />
                    </section>
                </div>
            )
                : (
                    <div className="sidebar-container">
                        <div className="title">
                            <img src={require("../images/logo.svg")} alt="Logo" style={{ width: "50px" }} />
                            <h3>Cinemeye</h3>
                        </div>

                        <section className="sidebar-content">
                            <p>Categories</p>
                            <ul>
                                <li><FontAwesomeIcon className="icons" icon={faHome} /><span>Main page</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faTv} /><span>TV-channels</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faFilm} /><span>Movies</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faVideo} /><span>Series</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faTheaterMasks} /><span>Concerts</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faRunning} /><span>Sports</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faCat} /><span>For kids</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faRunning} /><span>Sports</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faStar} /><span>Favorites</span></li>
                                <li><FontAwesomeIcon className="icons" icon={faUserAlt} /><span>Personal data</span></li>
                            </ul>
                        </section>

                        <section className="download-options">
                            <p>Enjoy your favorite movies,concerts and TV channels in our application!</p>
                            <img src={require("../images/app-store-badge.svg")} alt="app store" style={{ width: "100px" }} />
                            <img src={require("../images/google-play-badge.svg")} alt="Google play" style={{ width: "100px" }} />
                        </section>
                    </div>
                )
            }


        </div>
    );
}

export default Sidebar;
