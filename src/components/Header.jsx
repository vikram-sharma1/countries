import React from 'react'
import {MoonIcon} from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'



const Header = () => {

  const {toggleColorMode, colorMode} = useColorMode()
  // console.log(toggleColorMode)
  // console.log(colorMode);

  return (
    <div className='night-mode'>
          <div>
            <p className='where'>Where in the world ?</p>
          </div>
          <div className='night' onClick={toggleColorMode}>
              <span>
                
                {colorMode == 'dark' ? <MoonIcon color='white' /> : <MoonIcon color='black' />}
              </span>
              <span style={{marginLeft:"10px"}}>
                {/* Night mode */}
                {colorMode == 'dark' ? "Day mode" : "Night mode"}
              </span>
            </div>
      </div>
  )
}

export default Header