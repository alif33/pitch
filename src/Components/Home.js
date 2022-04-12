import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Section/Footer';
import Header from './Section/Header';
import Model from "./Section/Model";
import Navbar from "./Section/Navbar";
import NewProjects from "./Section/NewProjects";
import PoolAlert from './Section/PoolAlert';
import RecentProject from './Section/RecentProject';
import UpcomingProjects from './Section/UpcomingProjects';

const Home = () => {

  const { users } = useSelector(state=>state);

    return (
      <div className="home">
        <Navbar active={"home"} />
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