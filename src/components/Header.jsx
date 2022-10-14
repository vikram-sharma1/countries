import React from 'react'
import {MoonIcon} from '@chakra-ui/icons'


const Header = () => {
  return (
    <div className='night-mode'>
          <div>
            <p className='where'>Where in the world ?</p>
          </div>
          <div className='night'>
              <span>
                <MoonIcon />
              </span>
              <span style={{marginLeft:"10px"}}>
                Night mode
              </span>
            </div>
      </div>
  )
}

export default Header