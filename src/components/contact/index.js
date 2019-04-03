import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export class ContactInfo extends Component {
  render() {
    return (
      <Fade>
      <div className="main_card_wrapper">
      <h2 className="contact">CONTACT</h2>
        <div className="card_wrapper">
        
          <div className="contact_cards">
            <Zoom duration={500}>
            <div className="cards">
              <p className="card_content"><h2 style={{margin: '0'}}>BOOKINGS</h2>
              <br></br>
              David Lewis Productions
              Anthony Fokkerweg 61
              1059 CP Amsterdam
              The Netherlands
              T: +31 20 7581050
              www.davidlewis.nl
            </p>
            </div>
            </Zoom>
          </div>
          <div className="contact_cards">
          <Zoom duration={500} delay={250}>
            <div className="cards">
              <p className="card_content"><h2 style={{margin: '0'}}>PRESS</h2>
              <br></br>
              Armada Music
              Carmen van der Werf
              P.O. Box 75247
              1070 AE Amsterdam
              The Netherlands
              T: +31 20 408 0846
              press@armadamusic.com
              www.armadamusic.com</p>
            </div>
            </Zoom>
          </div>
          <div className="contact_cards">
          <Zoom duration={500} delay={500}>
            <div className="cards">
              <p className="card_content"><h2 style={{margin: '0'}}>MUSIC RELATED</h2>
              <br></br>
              Armada Music B.V.
              P.O. Box 75247
              1070 AE Amsterdam
              The Netherlands
              T: +31 20 408 0846
              info@armadamusic.com
              www.armadamusic.com
            </p>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
      </Fade>
    )
  }
}

export default ContactInfo;
