import React from 'react';
import "./styles/Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="poster">
            <div className="poster_container">
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/ivp-logo-w-180-d_tcm209-820644.png"
                    alt="" width="70%" />
                <h2>
                    HALLS OF IVY
                </h2>
                <div className="yellow-contain-btn">
                    <button className="yellow_container_btn yellow_container_btn1"><Link to="">
                        SHOP NOW<i className='fas fa-arrow-right arrow'></i></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home