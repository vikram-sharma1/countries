import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailsPage from '../DetailsPage'
import Homepage from '../Homepage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/detailsPage' element={<DetailsPage />}/>
        </Routes>

    </div>
  )
}

export default AllRoutes