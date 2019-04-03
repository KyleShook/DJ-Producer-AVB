import React from 'react'
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {

  const scrollToElement = (elements) => {
    scroller.scrollTo(elements, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -87
    })
    props.onClose(false)
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={()=> props.onClose(false)}

    > 
      
      <List component="nav"
        style={{
          background: '#3c3c3c',
          color: 'white',
          width:'250px',
          height: '100vh',
          
        }}
      >
        <ListItem button onClick={()=> scrollToElement('Home')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Home
        </ListItem>
        <ListItem className="tour_button" button onClick={()=> scrollToElement('Tour')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Tour Dates
        </ListItem>
        <ListItem button onClick={()=> scrollToElement('Armin')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Armin Van Buuren
        </ListItem>
        <ListItem button onClick={()=> scrollToElement('Latest')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Latest Releases
        </ListItem>
        <ListItem button onClick={()=> scrollToElement('Shop')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Shop
        </ListItem>
        <ListItem button onClick={()=> scrollToElement('ASOT')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          A State Of Trance
        </ListItem>
        <ListItem button onClick={()=> scrollToElement('Contact')} style={{justifyContent: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
          Contact
        </ListItem>
        
      </List>


    </Drawer>
  )
}

export default SideDrawer
