import React from "react"
import './App.css';
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Header from "./component/Header";
import Complaint from "./component/Complaint"
import Feature from "./component/Feature";
import Result from "./component/Result";
import Footer from "./component/Footer";

function App() {
  return (
    <>
     <Navbar/>
     <Cards/>
     {/* <Header/> */}
     <Complaint/>
     <Feature/>
     <Result/>
     <Footer/>
    </>
  );
}

export default App;
