import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';

export class Armin extends Component {
  render() {
    return (
      <Fade>
      <div className="center_wrapper_armin">
      <h2 className="armin_name">Armin van Buuren </h2>
      <div className="discount_wrapper">
        <Slide right duration={500}>
        <div className="discount_description">
          <p className="description_block">DJ and producer Armin van Buuren is a born perfectionist. His five-time number one position in the critically acclaimed DJ Mag Top 100 DJs Poll has been the result of his loyalty to fans, his creativity in the studio, the perseverance with which he hosts his weekly radio show ‘A State of Trance’, and the energy he brings to the crowds in front of him. Despite the heavy pressure that comes along with being one of the world’s most popular DJs, Armin has always kept his focus on the music. And that’s exactly what keeps him going.</p>
          <a href="https://www.skiddle.com/whats-on/Glasgow/Galvanizers-SWG3/Armin-Van-Buuren/13443012/tb.html?utm_expid=.4K-aGCJIRBubXvFzDIzatQ.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer"><button className="tickets">CHECK TICKET AVAILABILITY</button></a>
        </div>
        <Fade duration={1000}>
        <div className="discount_percentage">
          <h4 style={{textAlign: 'center'}}>“It’s not just love for music, it’s my passion. It goes beyond liking, and beyond a hobby. It’s about a way of living. Music is essential to my life.”</h4>
        </div>
        </Fade>
        </Slide>
      </div>
      </div>
      </Fade>
    )
  }
}

export default Armin;
