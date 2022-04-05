import React from 'react';
import Footer from './Section/Footer';
import Header from './Section/Header';
import Model from "./Section/Model";
import Navbar from "./Section/Navbar";
import NewProjects from "./Section/NewProjects";
import PoolAlert from './Section/PoolAlert';
import RecentProject from './Section/RecentProject';
import UpcomingProjects from './Section/UpcomingProjects';

const Home = () => {
    return (
      <div className="home">
        <Navbar />
        <Header/>
        <NewProjects/>
        <UpcomingProjects/>
        <RecentProject/>
        <Model/>
        <PoolAlert/>
        <Footer/>
      </div>
    );
};

export default Home;