import React, { Component } from 'react'
import { scroller } from 'react-scroll';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';


export default class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll) ;
  }

  

  handleScroll = () => {
    if(window.scrollY > 0){
        this.setState({
          headerShow: true
      })
    } else {
        this.setState({
          headerShow: false
        })
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }

  render() {

    const scrollToElement = (elements) => {
      scroller.scrollTo(elements, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -87
      })
    }

    return (
      <AppBar
        className="header"
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? '#000000' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue" onClick={()=> scrollToElement('Home')}>Armin Van Buuren</div>
            <div className="header_logo_title">
            <a href="https://www.facebook.com/arminvanbuuren" target="_blank" rel="noopener noreferrer"><i className="social fab fa-facebook fa-lg"></i></a>
            <a href="https://twitter.com/arminvanbuuren" target="_blank" rel="noopener noreferrer"><i className="social fab fa-twitter fa-lg"></i></a>
            <a href="https://www.youtube.com/user/arminvanbuuren/" target="_blank" rel="noopener noreferrer"><i className="social fab fa-youtube fa-lg"></i></a>
            <a href="https://www.instagram.com/arminvanbuuren/" target="_blank" rel="noopener noreferrer"><i className="social fab fa-instagram fa-lg"></i></a>
            <a href="https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank" rel="noopener noreferrer"><i className="social fab fa-spotify fa-lg"></i></a>
            <a href="https://itunes.apple.com/nl/artist/armin-van-buuren/id17976294?l=en" target="_blank" rel="noopener noreferrer"><i className="social fab fa-apple fa-lg"></i></a>
            </div>
          </div>

          <IconButton 
            aria-label="Menu"
            onClick={()=> this.toggleDrawer(true)}
            style={{
              color: '#ffffff'
            }}
            >

            <i className="fas fa-bars"></i>
          </IconButton>

          <SideDrawer 
            open={this.state.drawerOpen}
            onClose={(value)=> this.toggleDrawer(value)}
          />

        </Toolbar>
      </AppBar>
    )
  }
}
 