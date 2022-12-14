import React, { useState } from 'react'
import { Box, Flex, Image, Text, Button, useColorModeValue } from '@chakra-ui/react'
import Header from './Header';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';


const DetailsPage = () => {
    const navigate = useNavigate()
    const btnBgColor = useColorModeValue("gray.50", 'whiteAlpha.50' )
    let flag; 

    let countryData = JSON.parse(localStorage.getItem('country'))
   

        if(!countryData.borders){
            flag = false
        }
   


    const goBack = () => {
        navigate('/')
    }
  return (
    <div>
        <Header/>
        <Box w='90%' m='auto' p={4} borderWidth='5px' borderRadius='lg' h='800px' display="flex" gap='10px'>
            <Box flex={1} p={4} borderRadius='lg'>
            <Button leftIcon={<ArrowBackIcon />}  colorScheme='blue' variant='outline' onClick={goBack}>
                Back
            </Button>
            <Image src={countryData.flags.png} alt={countryData.name} w='100%' marginTop='150px'/>
            </Box>
            <Box flex={2} p={4} >
                <Box flex={2} p={4} display="flex" h='50%' marginTop='10%'>
                    <Box w='90%' m='auto' p={4} height='100%'>
                        <Text fontSize='5xl' as='b' >{countryData.name}</Text>

                        <Box display='flex' ml={4} marginTop='10%'>
                            <Text as='b' fontSize='lg'>Native Name : </Text>
                            <Text fontSize='lg'>{countryData.nativeName}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Population : </Text>
                            <Text fontSize='lg'>{countryData.population}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Region : </Text>
                            <Text fontSize='lg'>{countryData.region}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Sub Region : </Text>
                            <Text fontSize='lg'>{countryData.subregion}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Capital : </Text>
                            <Text fontSize='lg'>{countryData.capital}</Text>
                        </Box>
                    </Box>
                    <Box w='90%' m='auto' p={4} height='100%' pt='125px'>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Top Level Domain : </Text>
                            <Text fontSize='lg'>{countryData.topLevelDomain[0]}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Currencies : </Text>
                            <Text fontSize='lg'>{countryData.currencies[0].name}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Languages : </Text>
                            <Text fontSize='lg'>{countryData.languages[0].name}</Text>
                        </Box>
                    </Box>
                </Box>

                     <Box w='90%' m='auto' p={4} height='15%' marginTop='2%' display='flex' gap={10} justifyContent='center' alignItems='center'>


                    {flag == undefined ? <>
                        <Text fontSize='lg'>Border Countries :</Text>
                        {countryData.borders.map((bor, id) => {
                            return(
                                <Button key={id} colorScheme='blue' variant='outline'>{bor}</Button>
                                
                                )
                            })}
                    </> : <><p>No Boundaries Found</p></>}

                    
                
                        
                    </Box>
            </Box>
        </Box>
    </div>
        
  )
}

export default DetailsPage