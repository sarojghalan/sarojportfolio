import React from 'react'
import InspirationBanner from './HomeComponents/InspirationBanner'
import MasterBanner from './HomeComponents/MasterBanner'
import MyServices from './HomeComponents/MyServices'

const Home = () => {
  return (
    <>
        <MasterBanner />
        <InspirationBanner />
        <MyServices />
    </>
  )
}

export default Home