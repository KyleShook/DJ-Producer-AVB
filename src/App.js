import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import TourInfo from './components/tour_info';
import Armin from './components/armin'
import LatestReleases from './components/latest_releases';
import Merch from './components/store';
import StateOfTrance from './components/asot';
import ContactInfo from './components/contact';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Element name="Home">
          <Header />  
        </Element>
        <Featured />
        <Element name="Tour">
         <TourInfo />  
        </Element>
        <Element name="Armin">
          <Armin />
        </Element>
        <Element name="Latest">
          <LatestReleases />
        </Element>
        <Element name="Shop">
          <Merch />
        </Element>
        <Element name="ASOT">
          <StateOfTrance />
        </Element>
        <Element name="Contact">
          <ContactInfo />
        </Element>
        
        <Footer />
      </div>  
    ); 
  }
}

export default App;
