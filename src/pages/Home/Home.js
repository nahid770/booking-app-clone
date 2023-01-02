import React from 'react';
import ExploreBangladesh from '../../Components/ExploreBangladesh/ExploreBangladesh';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
// import Featured from '../../Components/Featured/Featured';
import Header from '../../Components/Header/Header';
import Navber from '../../Components/Navber/Navber';
import PropertyList from '../../Components/PropertyList/PropertyList';
import UniqueProperties from '../../Components/UniqueProperties/UniqueProperties';
import './Home.css';

const Home = () => {
    return (
        <div className=''>
            <div >
                <Navber></Navber>
                <Header></Header>
                <div className="homeContainer">
                <PropertyList></PropertyList>
                <UniqueProperties></UniqueProperties>
                <ExploreBangladesh></ExploreBangladesh>
                <FeaturedProperties></FeaturedProperties>
                
                </div>
            </div>
        </div>
    );
};

export default Home;