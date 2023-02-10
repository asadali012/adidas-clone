import React from 'react'
import { Link } from 'react-router-dom'
import PakiLogo from './assets/pakistan-flag-icon.svg'
import "./Footer.css";
import MediaQuery from 'react-responsive';

const Footer = () => {
    return (
        <>
            <MediaQuery minWidth={770}>
                <div>
                    <section>
                        <div id="product_list">
                            <div>
                                <h5>PRODUCTS</h5>
                                <ul>
                                    <li>Footwear</li>
                                    <li>Clothing</li>
                                    <li>Accessories</li>
                                    <li>Outlet - Sales</li>
                                    <li>New Arrivals</li>
                                </ul>
                            </div>
                            <div>
                                <h5>SPORTS</h5>
                                <ul>
                                    <li>Running</li>
                                    <li>Football</li>
                                    <li>Gym/Training</li>
                                    <li>Tennis</li>
                                    <li>Outdoor</li>
                                    <li>Basketball</li>
                                    <li>Swimming</li>
                                    <li>Skateboarding</li>
                                </ul>
                            </div>
                            <div>
                                <h5>COLLECTIONS</h5>
                                <ul>
                                    <li>Ultraboost</li>
                                    <li>Superstar</li>
                                    <li>NMD</li>
                                    <li>Stan Smith</li>
                                    <li>Sustainability</li>
                                    <li>Predator</li>
                                    <li>Parley</li>
                                    <li>adicolor</li>
                                </ul>
                            </div>
                            <div>
                                <h5>SUPPORT</h5>
                                <ul>
                                    <li>Help</li>
                                    <li>Customer Services</li>
                                    <li>Returns & Exchanges</li>
                                    <li>Shipping</li>
                                    <li>Order Tracker</li>
                                    <li>Store Locator</li>
                                    <li>Running Shoe Finder</li>
                                    <li>Bra Fit Guide</li>
                                    <li>Terms and conditions creators club</li>
                                </ul>
                            </div>
                            <div>
                                <h5>COMPANY INFO</h5>
                                <ul>
                                    <li className='link'><Link to="/">About Us</Link></li>
                                    <li>adidas stories</li>
                                    <li>adidas Apps</li>
                                    <li>Entity Details</li>
                                    <li>Press</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ------------------------------ */}


                    <section>
                        <div id="small_screenProductList">
                            <div>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Order Tracker</li>
                                    <li>Store Finder</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Returns $ Refunds</li>
                                    <li>Help</li>
                                    <li>Terms and conditions creater club</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* -------------------- */}

                    <footer>
                        <div class="footsignup">
                        </div>
                        <div></div>
                        <div class="lastfoot">
                            <div class="lastfoot1">
                                <div><img class="pakilogo" src={PakiLogo} alt="" />Pakistan
                                </div>

                                <div class="copyright"><Link to="/">©2023 ADIDAS Pakistan Marketing Pvt. Ltd</Link></div>

                            </div>

                            <div class="tnc">
                                <p><Link to="/">About Us</Link></p>
                                <p><Link to="/">Privacy</Link></p>
                                <p><Link to="/">Terms & Conditions</Link></p>
                                <p><Link to="/">Cookies</Link></p>
                            </div>

                        </div>

                    </footer>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={769}>
                <div>
                    <section>
                        <div id="small_screenProductList">
                            <div>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Order Tracker</li>
                                    <li>Store Finder</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Returns $ Refunds</li>
                                    <li>Help</li>
                                    <li>Terms and conditions creater club</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* -------------------- */}

                    <footer>
                        <div class="footsignup">
                        </div>
                        <div></div>

                        <div class="lastfoot_s">


                            <div class="tnc_sm">
                                <p><Link to="/">About Us</Link></p>
                                <p><Link to="/">Privacy</Link></p>
                                <p><Link to="/">Terms & Conditions</Link></p>
                                <p><Link to="/">Cookies</Link></p>
                            </div>

                            <div class="lastfoot1">
                                <div className='logo_foot'><img class="pakilogo_s" src={PakiLogo} alt="" />Pakistan
                                </div>

                                <div class="copyright_s"><Link to="/">©2023 ADIDAS Pakistan Marketing Pvt. Ltd</Link></div>

                            </div>
                        </div>

                    </footer>
                </div>
            </MediaQuery>
        </>
    )
}

export default Footer