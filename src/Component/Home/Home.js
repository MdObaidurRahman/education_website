import React, { useEffect, useState } from 'react';

import HomeData from '../HomeData/HomeData';

import './Home.css'


const Home = () => {
    //useState use
    const [home, sethome] = useState([]);
    //useEffect and fetch use
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => sethome(data.slice(0, 4)))
    }, [])
    return (

        <div>
            <div className='grid'>
                {/* map */}
                {
                    home.map(homedata => <HomeData id={homedata._id} homedata={homedata}></HomeData>)
                }
            </div>

        </div>
    );
};

export default Home;