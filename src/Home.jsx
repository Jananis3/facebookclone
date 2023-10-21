import React from 'react';
import './Home.css';
import './App.jsx';
import Feed from "./Feed";
import Slidebar from "./Slidebar";
import Widget from "./Widget";
//import HeaderArea from './HeaderArea';

//import HeaderArea from "./HeaderArea/HeaderArea";
//import NavbarComp from './Navbar';

//import Store from "./Store";
//import Vedio from "./vedio";
//import Friends from "./friends";
//import Bell from "./bell";

function Home() 
{
    return (
      <div className="App">
      <NavbarComp/>   
        
    <div className='home__body'>
        <Feed/>
        <Slidebar/>
        <Widget/>
    </div>
    </div>
    );
  }
  
export default Home;


