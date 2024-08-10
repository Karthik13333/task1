import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import MyCart from './container/MyCart'
import Things from './container/Things';
import Checkout from './container/Checkout';



function Navrot() {
    const [navVisible, showNavbar] = useState(true)
    return (
        <>
            <div className='App'>
                <Navbar visible={navVisible} show={showNavbar} />
                <div className={!navVisible ? "page" : "page page-with-navbar"} >
                    <Routes>
                    
                        <Route path='/Checkout/'>
                            <Route path='' element={<Checkout/>}/>
                            <Route path=':id ' element={< Checkout/>}/>

                        </Route>


                    </Routes>
                </div>
            </div>

        </>
    )
}
export default Navrot;