import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Flag = ({props}) => {
  // console.log(props)
  const obj = {
    imgUrl : props.flags.png,
    name : props.name,
    population : props.population,
    region : props.region, 
    capital : props.capital
  }
  return (
      <Box w='100%' p={4} borderWidth='1px' borderRadius='lg'>
          <Image src={obj.imgUrl} alt={obj.name} h={200}/>
        <Box w='100%' p={4} borderRadius='lg'>
          <Text as='b' fontSize='2xl'>{obj.name}</Text>
        </Box>
        <Box display='flex' ml={4}>
            <Text as='b' fontSize='lg'>Population : </Text>
            <Text fontSize='lg'>{obj.population}</Text>
        </Box>
        <Box display='flex' ml={4}>
            <Text as='b' fontSize='lg'>Region : </Text>
            <Text fontSize='lg'>{obj.region}</Text>
        </Box>
        <Box display='flex' ml={4}>
            <Text as='b'>Capital : </Text>
            <Text fontSize='lg'>{obj.capital}</Text>
        </Box>
    </Box>  
  )
}

export default Flag