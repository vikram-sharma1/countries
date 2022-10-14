import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Flag from './Flag'
// import { Input } from '@chakra-ui/react'
import {
  Input,
} from "@chakra-ui/input"

import { Select } from '@chakra-ui/react'
import './styles/Homepage.css'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


const Homepage = () => {

    const [countries, setCountries] = useState([])
    const [secondCountries, setSecondCountries] = useState([])
    const [countriesList, setCountriesList] = useState([])
    const [status, setStatus] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/all`).then((res)=>{
            // console.log(res.data)
            setCountries(res.data)
            setSecondCountries(res.data)
            setStatus(true)
            let obj = {}
              res.data.forEach((country) => {
                  if(!obj[country.region]){
                    obj[country.region] = [country.region]
                  }
                  
              })
              
              setCountriesList(Object.keys(obj))
            })
    },[])

    const handleChange = (e) => {
      // console.log(e.target.value)
      let {value} = e.target

       const newCountries = countries.filter((country) => {
            let countryName = country.name.toLowerCase()
            
            if(countryName.includes(value.toLowerCase())){
              return country
            }
        })

        setSecondCountries([...newCountries])



    }

    const selectChange = (e) => {
      
        console.log(e.target.value)
        let {value} = e.target

        const newCountries = countries.filter((country) => {
          let regionName = country.region
          
          if(regionName.includes(value)){
            return country
          }
      })

      console.log(newCountries);
      setSecondCountries([...newCountries])


    }

    const handleClick = (country) => {
      // console.log(country)
      
      localStorage.setItem('country',JSON.stringify(country))
      navigate('/detailsPage')

    }

  return (
    <>
    
    {status? <div id='main-container'>
      <Header />
      <div className='top-container'>
          <div>
              <Input w='60%' h='50%' ml="20%" borderRadius="10px" size='lg' fontSize='1.4em' p={5} placeholder="Search Countries" onChange={(e)=>handleChange(e)}/>
          </div>
           <div>
              <Select placeholder='Select option' onChange={(e)=>selectChange(e)}>
                  {countriesList.map((name, id) => {
                    return(

                      <option key={id} value={name} >{name}</option>
                    )
                  })}
              </Select>
           </div>
      </div>
      <div className='all-country-container'>
                {secondCountries.map((country, id) => {
                  return(
                    <div key={id} onClick={()=>handleClick(country)}>
                      <Flag  props={country} />
                    </div>
                  )
                })}

      </div>
      
    </div> : <Loader />}
    </>
  )
}

export default Homepage