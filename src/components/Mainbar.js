import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faSearch, faPlay, faStar, faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "./Sidebar"

function Mainbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="mainbar">
            <div className="mainbar-container">
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search.." />
                </div>
                <div className="en"><FontAwesomeIcon icon={faGlobeAsia} /><span>EN</span></div>
                <div className="auth">
                    <button>Login</button>
                    <button>Try now</button>
                </div>
            </div>

            <div className="carousel">
                <div className="carousel-text">
                    <ul className="carousel-genre">
                        <li>Action</li><span>|</span>
                        <li>Drama</li><span>|</span>
                        <li>Movie</li><span>|</span>
                        <li>Adventure</li><span>|</span>
                    </ul>
                    <h2>Interstellar</h2>
                    <div className="carousel-button">
                        <div><FontAwesomeIcon icon={faPlay} className="carousel-icons" /><span>Watch trailer</span></div>
                        <div><FontAwesomeIcon icon={faStar} className="carousel-icons" /><span>Add to favorites</span></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>

            <div className="movies">
                <h2>Movie collections</h2>
                <div className="movie-card-container">
                    <div className="movie-card">
                        <img src={require("../images/mitty.jpg")} alt="mitty movie" />
                        <div>
                            <p>Adventure</p>
                            <p>Collection of films that amaze</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/Edge-of-Tomorrow-Wallpapers-1.jpg")} alt="tomorrow movie" />
                        <div>
                            <p>Fantastic</p>
                            <p>Collection of films that amaze</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/dolittle.jpg")} alt="dolittle movie" />
                        <div>
                            <p>Adventure</p>
                            <p>Collection of films that amaze</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/joker.jpg")} alt="joker movie" />
                        <div>
                            <p>Adventure</p>
                            <p>Collection of films that amaze</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movies">
                <h2>New</h2>
                <div className="movie-card-container">
                    <div className="movie-card">
                        <img src={require("../images/21-bridges.jpg")} alt="mitty movie" />
                        <div>
                            <p>21 bridges</p>
                            <p>Action, Thriller</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/jumanji.jpg")} alt="jumanji movie" />
                        <div>
                            <p>Jumanji: The next level</p>
                            <p>Fantasy, Adevnture, Comedy</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/midway.jpg")} alt="Midway movie" />
                        <div>
                            <p>Midway</p>
                            <p>Action, Adventure, Drama</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/gentlemen2020_feature.jpg")} alt="The gentlemen movie" />
                        <div>
                            <p>The Gentlemen</p>
                            <p>Action, Comedy</p>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(open)}
            {open && <Sidebar open={open} />}
        </div>
    );
}

export default Mainbar;
