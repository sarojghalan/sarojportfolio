import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomeRoutes from './HomeRouting/HomeRoutes'

const App = () => {
  return (
    <>
      <Navbar />
      <HomeRoutes />
      <Footer />
    </>
  )
}

export default App