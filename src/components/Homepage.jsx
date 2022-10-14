import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Flag from './Flag'
// import { Input } from '@chakra-ui/react'
import {
  Input,
} from "@chakra-ui/input"
import { SearchIcon} from '@chakra-ui/icons'

import { Select } from '@chakra-ui/react'
import './styles/Homepage.css'


const Homepage = () => {

    const [countries, setCountries] = useState([])
    const [countriesList, setCountriesList] = useState([])

    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/all`).then((res)=>{
            // console.log(res.data)
            setCountries(res.data)
            let obj = {}
              res.data.forEach((country) => {
                  if(!obj[country.region]){
                    obj[country.region] = [country.region]
                  }
                  
              })
              
              setCountriesList(Object.keys(obj))
            })
    },[])

    // console.log(countriesList)
  return (
    <div id='main-container'>
      <div className='top-container'>
          <div>
              <Input w='60%' h='50%' ml="20%" borderRadius="10px" size='lg' fontSize='1.4em' p={5} placeholder="Search Countries"/>
          </div>
           <div>
              <Select placeholder='Select option'>
                  {countriesList.map((name, id) => {
                    return(

                      <option key={id} value={name}>{name}</option>
                    )
                  })}
              </Select>
           </div>
      </div>
      <div className='all-country-container'>
                {countries.map((country) => {
                  return(
                    <Flag props={country}/>
                  )
                })}

      </div>
      
    </div>
  )
}

export default Homepage