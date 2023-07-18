import './App.css';
import Header from './MyComponents/Header';
import Homepage from './MyComponents/Homepage';
import About from './MyComponents/About';
import Glance from './MyComponents/Glance';
import Project from './MyComponents/Project';
import Activities from './MyComponents/Activities';
import Team from './MyComponents/Team';
import Footer from './MyComponents/Footer';
import iitk from './images/iitk-logo.png';
import snt from './images/snt.png';
import aero from './images/Aero-logo.png';
import bg from './images/club-room.jpg';
import bg2 from './images/club-room-2.jpg';
import insta from './images/square-instagram.svg';
import fb from './images/square-facebook.svg';
import linkedin from './images/linkedin.svg';
import discord from './images/discord.png';
import youtube from './images/youtube.png';
import globe from './images/globe.png';
import envelope from './images/envelope-solid.svg';
import slide1 from './images/special-menu-1.jpeg';
import slide2 from './images/special-menu-2.jpg';
import slide3 from './images/special-menu-3.jpg';
import slide4 from './images/IC.jpg';
import aeroweek from './images/Aeroweek.jpg';
import techkriti from './images/techkriti.png';
import takneek from './images/Takneek.jpg';
import summer from './images/Summer-project.png';
import bgvideo from './images/team-bg.mp4';
import balsa from './images/balsa.jpg';
import Quadplane from './images/quadplane.png';
import ornithopter from './images/ornithopter.png';
import Quadcopter from './images/Quadcopter.png';
import tailsitter from './images/tailsitter.png';
import aerial from './images/Aerial.png';
import introductory from './images/introductory.png';
import types from './images/types.jpg';
import terminology from'./images/terminology.png';
import drone from './images/drone.jpg';
import xflr from './images/XFLR5.jpg';
import avionics from './images/avionics.png';
import 'bootstrap/dist/css/bootstrap.min.css';

//Team Photos

import Aakansha from './images/team/Aakanksha.jpg';
import Abhinaba from './images/team/Abhinaba.jpg';
import Aditya from './images/team/Aditya.jpg';
import Alka from './images/team/Alka.jpg';
import Ambuj from './images/team/Ambuj.jpg';
import Arpit from './images/team/Arpit.jpg';
import Himanshu from './images/team/Himanshu.jpg';
import Mohit from './images/team/Mohit.jpeg';
import Moin from './images/team/Moin.jpg';
import Netraj from './images/team/Netraj.jpg';
import Omkar from './images/team/Omkar.jpeg';
import Piyush from './images/team/Piyush.jpg';
import Prabuddha from './images/team/Prabuddha.png';
import Pranshu from './images/team/Pranshu.jpg';
import Pulak from './images/team/Pulak.png';
import Rahul from './images/team/Rahul.jpg';
import Rishima from './images/team/Rishima.jpg';
import Ritwik from './images/team/Ritwik.jpg';
import Sarthak from './images/team/Sarthak.jpg';
import Shrey from './images/team/Shrey.jpg';
import Sahil from './images/team/sahil.jpg';
import Shreyash from './images/team/Shreyash.jpg';
import Sujeet from './images/team/Sujeet.jpg';
import Ujjwal from './images/team/Ujjwal.jpeg';
import aryan from './images/team/aryan.jpeg';
import Vaibhav from './images/team/Vaibhav.jpg';



// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      
      <Router basename='/club-website-master-2'>
          <Header iitk={iitk} snt={snt} aero={aero} />
          <Switch>
            <Route exact path='/'>
              <Homepage bg={bg} bg2={bg2} bgvideo={bgvideo} slide1={slide1} slide2={slide2} slide3={slide3} slide4={slide4}/>
              {/*<About bgvideo={bgvideo} />
              <Glance slide1={slide1} slide2={slide2} slide3={slide3} />*/}
            </Route>
            <Route path='/club-website-master-2'>
              <Homepage bg={bg} bg2={bg2} bgvideo={bgvideo} slide1={slide1} slide2={slide2} slide3={slide3}/>
              {/*<About bgvideo={bgvideo} />
              <Glance slide1={slide1} slide2={slide2} slide3={slide3} />*/}
            </Route>
            <Route path='/projects'>
              <Project bgvideo={bgvideo} slide3={slide3} Quadplane={Quadplane} ornithopter={ornithopter} Quadcopter={Quadcopter} tailsitter={tailsitter} aerial={aerial}/>
            </Route>
            <Route path='/activities'>
              <Activities avionics={avionics} xflr={xflr} drone={drone} terminology={terminology} types={types} introductory={introductory} slide3={slide3} aeroweek={aeroweek} techkriti={techkriti} summer={summer} takneek={takneek} bgvideo={bgvideo} />
            </Route>
            <Route path='/team'>
              <Team bgvideo={bgvideo} globe={globe} techkriti={techkriti} insta={insta} fb={fb} envelope={envelope} Aakansha={Aakansha} Abhinaba={Abhinaba} Aditya = {Aditya} Alka={Alka} Ambuj={Ambuj} Arpit={Arpit} Himanshu={Himanshu} Mohit={Mohit} Moin={Moin} Netraj={Netraj} Omkar={Omkar} Piyush={Piyush} Prabuddha={Prabuddha} Pranshu={Pranshu} Pulak={Pulak} Rahul={Rahul} Rishima={Rishima} Ritwik={Ritwik} Sarthak={Sarthak} Sahil={Sahil} Shrey={Shrey} Shreyash={Shreyash} Sujeet={Sujeet} Ujjwal={Ujjwal} Vaibhav={Vaibhav} />
            </Route>
          </Switch>
          <Footer insta={insta} fb={fb} linkedin={linkedin} discord={discord} youtube={youtube} globe={globe} />
      </Router>
    </>
  );
}

export default App;

