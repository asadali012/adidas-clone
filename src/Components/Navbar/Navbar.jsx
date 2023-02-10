import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from './assets/adidas-logo.png';
import MediaQuery from 'react-responsive'


const Navbar = () => {
    return (
        <>
            <MediaQuery minWidth={770}>
                <nav className="nav">
                    <div className="uppernav">
                        <p><Link to="">SIGN UP & GET 15% OFF</Link></p>
                        <p><Link to="">QUICK EASY RETURNS ON PREPAID ORDERS</Link></p>
                        <p><Link to="">FREE DELIVERY FOR ALL ORDERS NOW</Link></p>
                    </div>

                    <div className="bottomnav">
                        <div className="firstnav displaynone">
                            <p><Link to="">help</Link></p>
                            <p><Link to="">returns</Link> </p>
                            <p><Link to="">order tracker</Link> </p>
                            <p><Link to="">sign up</Link> </p>
                            <p><Link to="">creators club</Link> </p>
                            <p><Link to="login.html">log in</Link> </p>
                        </div>


                        <div className="midnav">
                            <div className="hamburger">
                                <div id="bar1" className="bar"></div>
                                <div id="bar2" className="bar"></div>
                                <div id="bar3" className="bar"></div>
                            </div>
                            <div className="hamnames">
                                <li><Link to=""><strong>MEN</strong></Link></li>
                                <li><Link to=""><strong>WOMEN</strong></Link></li>
                                <li><Link to=""><strong>KIDS</strong></Link></li>
                                <li><Link to="">LOG IN</Link></li>
                            </div>

                            <div className="logodiv">
                                <Link to="/"><img className="adidaslogo"
                                    src={Logo}
                                    alt="" /></Link>
                            </div>
                            <div className="cat displaynone">
                                <p><Link to="/"><strong>MEN</strong></Link></p>
                                <p><Link to="/"><strong>WOMEN</strong></Link></p>
                                <p><Link to="/"><strong>KIDS</strong></Link></p>
                                <p><Link to="/"><strong>SPORTS</strong></Link></p>
                                <p><Link to="/"><strong>BRANDS</strong></Link></p>
                                <p><Link to="/"><strong>COLLECTIONS</strong></Link></p>
                                <p><Link to="/"><strong>OUTLET</strong></Link></p>

                            </div>

                            <div className="icons">
                                <div><input className="search displaynone" type="sreach" placeholder="Search" /></div>

                                <div className="disicon"><Link to="/"><i className="fas fa-user-circle"></i></Link></div>
                                <p id="wishlistLen">10</p>
                                <div className="disicon heart"><Link to="/"><i className="far fa-heart"></i></Link></div>
                                <div className="searchicon"><Link to=""><i className="fas fa-search"></i></Link></div>
                                <p id="cartLen">10</p>
                                <div className="disicon"><Link to="/"><i className="fas fa-shopping-cart"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
                <nav className="nav">
                    <div className="uppernav">
                        <p><Link to="">SIGN UP & GET 15% OFF</Link></p>

                    </div>

                    <div className="bottomnav">



                        <div className="midnav">
                            <div className="hamburger">
                                <div id="bar1" className="bar"></div>
                                <div id="bar2" className="bar"></div>
                                <div id="bar3" className="bar"></div>
                            </div>

                            <div className="hamnames">
                                <li><Link to=""><strong>MEN</strong></Link></li>
                                <li><Link to=""><strong>WOMEN</strong></Link></li>
                                <li><Link to=""><strong>KIDS</strong></Link></li>
                                <li><Link to="">LOG IN</Link></li>
                            </div>

                            <div className="logodiv">
                                <Link to=""><img className="adidaslogo"
                                    src={Logo}
                                    alt="" /></Link>
                            </div>

                            <div className="icons">
                                <div><input className="search displaynone" type="sreach" placeholder="Search" /></div>

                                <div className="disicon"><Link to="/"><i className="fas fa-user-circle"></i></Link></div>
                                <p id="wishlistLen">10</p>
                                <div className="disicon heart"><Link to="/"><i className="far fa-heart"></i></Link></div>
                                <div className="searchicon"><Link to=""><i className="fas fa-search"></i></Link></div>
                                <p id="cartLen">10</p>
                                <div className="disicon"><Link to="/"><i className="fas fa-shopping-cart"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </MediaQuery>
        </>
    )
}

export default Navbar