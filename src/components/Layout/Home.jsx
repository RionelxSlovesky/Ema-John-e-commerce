import React from 'react';
import './Home.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>

                <section className='container'>
                    <Outlet></Outlet>
                </section>

            </main>
        </>
    );
};

export default Home;