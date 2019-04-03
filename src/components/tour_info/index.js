import React from 'react'
import Zoom from 'react-reveal/Zoom';


const TourInfo = () => {
  return (
    <div className="main_t_wrapper">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          
          <div className="tour_wrapper">
          <h2 className="tour_header">TOUR</h2>
          </div>
          <div className="tour_info">
          <Zoom duration={500}>
            <div className="tour_dates">
            <p>Feb.
              <br></br> 16th 2019</p>
            <p>Feb.
              <br></br> 23rd 2019</p>
            <p>March
              <br></br> 9th 2019</p>
            <p>March
              <br></br> 14th 2019</p>
            <p>June
              <br></br>22nd 2019</p>
            </div>
            </Zoom>
            <Zoom duration={500} delay={250}>
            <div className="tour_event">
              <p>SWG3</p>
              <p>A.S.O.T. FESTIVAL</p>
              <p>A.S.O.T. MADRID</p>
              <p>TOMORROWLAND WINTER</p>
              <p>A.S.O.T. KIEV</p>
            </div>
            </Zoom>
            <Zoom duration={500} delay={500}>
            <div className="tour_location">
            <p>Glasgow, United Kingdom</p>
            <p>Utrecht, Netherlands</p>
            <p>Madrid, Spain</p>
            <p>L'Alpe d'Huez, France</p>
            <p>TBA</p>
            </div>
            </Zoom>
            <Zoom duration={500} delay={750}>
            <div className="tour_tickets">
            <a href="https://www.skiddle.com/whats-on/Glasgow/Galvanizers-SWG3/Armin-Van-Buuren/13443012/tb.html?utm_expid=.4K-aGCJIRBubXvFzDIzatQ.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer"><button className="tickets">GET YOUR TICKETS</button></a>
            <a href="https://www.facebook.com/events/2473625166196867/" target="_blank" rel="noopener noreferrer"><button className="tickets">GET YOUR TICKETS</button></a>
            <a href="https://asot900spain.com/tickets/" target="_blank" rel="noopener noreferrer"><button className="tickets">GET YOUR TICKETS</button></a>
            <a href="https://www.tomorrowland.com/en/winter/packages" target="_blank" rel="noopener noreferrer"><button className="tickets">GET YOUR TICKETS</button></a>
            <a href="https://concert.ua/en/event/asot900" target="_blank" rel="noopener noreferrer"><button className="tickets">GET YOUR TICKETS</button></a>
            </div>
            </Zoom>
          </div>

          
          
        </div>
      </div>
    </div>
  )
}

export default TourInfo;
