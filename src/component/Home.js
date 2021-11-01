import React from 'react'
import Navbar from "./Navbar";
// import { Route, Switch } from "react-router-dom";
import Cards from "./Cards";

import Complaint from "./Complaint";
import Feature from "./Feature";
import Result from "./Result";
import Footer from "./Contact";

import Applicab from './Applicab';
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
        <Applicab/>
        <Footer />
      </>
    );
}

export default Home
