import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../Components/Home'

const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default HomeRoutes