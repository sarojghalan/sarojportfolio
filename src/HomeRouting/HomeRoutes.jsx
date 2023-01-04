import React,{lazy , Suspense} from 'react'
import { Route , Routes } from 'react-router-dom'
const Home = lazy(() =>import("../Components/Home"))

const HomeRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
    </Suspense>
  )
}

export default HomeRoutes