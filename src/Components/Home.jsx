import React from 'react'
import AboutMe from './HomeComponents/AboutMe'
import InspirationBanner from './HomeComponents/InspirationBanner'
import MasterBanner from './HomeComponents/MasterBanner'
import MyServices from './HomeComponents/MyServices'

const Home = () => {
  return (
    <>
        <MasterBanner />
        <InspirationBanner />
        <MyServices />
        <AboutMe />
    </>
  )
}

export default Home