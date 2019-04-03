import React from 'react'
import Button from '@material-ui/core/Button'


const MyButton = (props) => {
  return (
    <Button
      href="#"
      variant="contained"
      size="small"
      style={{
        background: 'red',
        color: 'white'
      }}
    >
     Check Ticket Availability
    </Button>
  )
}

export default MyButton;