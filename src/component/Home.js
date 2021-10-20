import React from 'react'
import Navbar from "./Navbar";
// import { Route, Switch } from "react-router-dom";
import Cards from "./Cards";
import Header from "./Header";
import Complaint from "./Complaint";
import Feature from "./Feature";
import Result from "./Result";
import Footer from "./Footer";
import Applicable from "./Applicable";
const Home = () => {
    return (
      <>
        <Navbar />
        <Cards />
        {/* <Header/> */}
        <Complaint />
        <Feature />
        <Result />
        {/* <Applicable/> */}
        <Footer />
      </>
    );
}

export default Home
