import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export class StateOfTrance extends Component {
  render() {
    return (
      <Fade>
      <div className="asot_wrapper">
        <div className="asot">
          <div className="asot_bg">
            <img className="asot_bg1" src="https://www.arminvanbuuren.com/wp-content/uploads/2016/03/ASOT-page.jpg" alt=""/>
          </div>
            <div className="asot_info">
              <h2 className="asot_title">A State of Trance</h2>
              <p>Broadcast weekly to over 41 million listeners in 84 different countries from the custom-built radio studio in Amsterdam, Armin van Buuren’s A State Of Trance radio show is the epicenter of Trance music. The show won the title of ‘Best Mix Radio Show’ at the International Dance Music Awards in Miami for an unprecedented seven times and continues to provide Trance fans with the hottest new tunes, a Future Favorite, Tune Of The Week, Progressive Pick and Service For Dreamers classic every single week. Add to that the success of the global A State Of Trance events, the show’s growing popularity and its loyal fanbase and you know A State Of Trance is where the magic happens.</p>
              <a href="https://enter.astateoftrance.com/" target="_blank" rel="noopener noreferrer"><button className="asot_web">ENTER THE STATE OF TRANCE WEBSITE</button></a>
            </div> 
          </div> 
          <div className="asot_spotify">
          <iframe title="spotify" className="spotify_widget" src="https://open.spotify.com/embed?uri=spotify%3Auser%3Aarminvanbuurenofficial%3Aplaylist%3A0Hu49FCkYPuWuAAy0XEx0M" width="600px" height="100%vh" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
      </div>
      </Fade>
    )
  }
}

export default StateOfTrance;


