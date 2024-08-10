import React from "react";
import Nature from './images/Nature.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css';
import {
    FaAngleRight, FaAngleLeft, FaChartBar, FaThLarge,
    FaCog, FaSignOutAlt, FaBars, FaUser, FaShoppingCart
} from 'react-icons/fa';

import { Link } from "react-router-dom";

const ICON_SIZE = 20;

function Navbar({ visible, show }) {

    const navi = useNavigate()

    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.get('http://localhost:3000')
            .then(res => {
                console.log(res);
                localStorage.removeItem("valid")
                navi('/')
            })
            .catch(err => {
                console.error(err);
                alert(' Please try again.');
            });

    }

    return (
        <>
            <div className="mobile-nav ">
                <button className="mobile-nav-btn" onClick={() => show(!visible)}>
                    <FaBars size={24} />
                </button>
            </div>


            <nav className={visible ? "" : "navbar"}>
                <button className="nav-btn" type="button" onClick={() => show(!visible)}>
                    {
                        visible ? <FaAngleLeft size={15} /> : <FaAngleRight size={15} />
                    }
                </button>

                <div>
                    <Link to="logo" className="logo">
                        <img src={Nature} className="img-fluid" alt="Nature"></img>
                    </Link>
                    <div className="nav-top">
                        <Link to="Home" className="nav-link">
                            <FaThLarge size={ICON_SIZE} />
                            <span>Home</span>
                        </Link>
                        <Link to="Product" className="nav-link">
                            <FaChartBar size={ICON_SIZE} />
                            <span>Product</span>
                        </Link>
                        <Link to="Contact" className="nav-link">
                            <FaUser size={ICON_SIZE} />
                            <span>BookList</span>
                        </Link>


                    </div>
                </div>

                <div>
                <Link to="MyCart" className="nav-link">
                        <FaShoppingCart size={ICON_SIZE} />
                        <span>Cart</span>
                    </Link>
                    <Link to="Settings" className="nav-link">
                        <FaCog size={ICON_SIZE} />
                        <span>Settings</span>
                    </Link>

                    <Link className="nav-link" onClick={handleLogout}>
                        <FaSignOutAlt size={ICON_SIZE} />
                        <span className="ms-2 d-none d-sm-inline">Logout</span>
                    </Link>

                </div>
            </nav>

        </>
    )
}

export default Navbar;