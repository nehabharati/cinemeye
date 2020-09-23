import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faSearch, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import ReactPlayer from "react-player"
library.add(fab)



function TVMainbar() {
    return (
        <div className="mainbar">
            <div className="mainbar-container">
                <div className="search"><FontAwesomeIcon icon={faSearch} className="search-icon" /><input type="text" placeholder="Search.." /></div>
                <div className="en"><FontAwesomeIcon icon={faGlobeAsia} /><span>EN</span></div>
                <div className="auth">
                    <button>Login</button>
                    <button>Try now</button>
                </div>
            </div>

            <div className="tv-carousel">
                <div className="brand-icons">
                    <FontAwesomeIcon icon={['fab', 'imdb']} style={{ color: "white" }} /><span>8.6</span>
                    <img src={require("../images/logo.svg")} alt="cinemeye" style={{ width: "20px" }} /><span>9.1</span>
                </div>
                <div className="carousel-text">
                    <ul className="carousel-genre">
                        <li>Action</li><span>|</span>
                        <li>Drama</li><span>|</span>
                        <li>Series</li><span>|</span>
                        <li>2018</li><span>|</span>
                    </ul>
                    <h2>Westworld</h2>
                    {/* <div className="carousel-button">
                        <div><FontAwesomeIcon icon={faPlay} className="carousel-icons" /><span>Watch trailer</span></div>
                        <div><FontAwesomeIcon icon={faStar} className="carousel-icons" /><span>Add to favorites</span></div>
                    </div> */}
                    <p>The story begins in Westworld, a fictional technologically advanced Wild-West-themed amusement park
                        populated by android "hosts" </p>

                    <div className="seasons">
                        <p>Seasons:</p>
                        <div>
                            <button>Season 1</button>
                            <button>Season 2</button>
                            <button>Season 3</button>
                            <button>Season 4</button>
                            <button>Season 5</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movies">
                <div className="movie-card-container">
                    <div className="tv-card">
                        {/* <img src={require("../images/mitty.jpg")} alt="mitty movie" /> */}
                        {/* // Render a YouTube video player */}
                        <div className='player-wrapper'>
                            <ReactPlayer url='https://youtu.be/9BqKiZhEFFw' className='react-player' width='100%'
                                height='100%' />
                        </div>
                        <div className="video">
                            <p>Continue watching</p>
                            <p>Season 1 Series 3</p>
                            <p>The Stray</p>
                        </div>
                    </div>
                    <div className="tv-options">
                        <div><FontAwesomeIcon icon={faStar} style={{ color: "#00ced1", marginRight: "10px" }} /><span>In favorites</span></div>
                        <div><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} /><span>Watch later</span></div>
                    </div>
                </div>
                <div className="tv-card-desc-container">
                    <div className="tv-description">
                        <h5>Description:</h5>
                        <p>The story begins in Westworld, a fictional technologically advanced Wild-West-themed amusement park
                        populated by android "hosts". The park caters to high paying "guests" who may indulge their wildest fantasies
                        withing the park without fear of retaliation from the hosts, who are prevented from their programming
                         form harming humans</p>
                    </div>
                    <div className="tv-desc-options">
                        <ul>
                            <li>Directors</li>
                            <li>Cast</li>
                            <li>Country</li>
                            <li>Production</li>
                        </ul>
                        <ul>
                            <li>Jonathan Nolan, Johnny Campbell, Richard J. Lewis</li>
                            <li>Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandle Newton</li>
                            <li>USA</li>
                            <li>HBO</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="movies">
                <h2>Season 1 Series</h2>
                <div className="movie-card-container">
                    <div className="movie-card">
                        <img src={require("../images/ep-1.jpg")} alt="mitty movie" />
                        <div>
                            <p>The Original</p>
                            <p>Episode 1</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/ep-2.jpg")} alt="jumanji movie" />
                        <div>
                            <p>Chestnut</p>
                            <p>Episode 2</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/ep-3.jpg")} alt="Midway movie" />
                        <div>
                            <p>The Stray</p>
                            <p>Episode 3</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src={require("../images/ep-4.jpg")} alt="The gentlemen movie" />
                        <div>
                            <p>Dissonance Theory</p>
                            <p>Episode 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TVMainbar;
