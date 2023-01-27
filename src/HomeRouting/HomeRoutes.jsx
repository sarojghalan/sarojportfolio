import React,{lazy , Suspense} from 'react'
import { Route , Routes } from 'react-router-dom'
import MyProjectsPage from '../Pages/MyProjects/MyProjectsPage'
import ServicePage from '../Pages/ServicePage/ServicePage'
const Home = lazy(() =>import("../Components/Home"))
const About = lazy(()=>import('../Pages/About/About'))
const Cv = lazy(()=>import('../Pages/CV/Cv'))

const HomeRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about_me" element={<About/>} />
        <Route path="/my_projects" element={<MyProjectsPage/>} />
        <Route path="/my_cv" element={<Cv/>} />
        <Route path="/my_services" element={<ServicePage/>} />
    </Routes>
    </Suspense>
  )
}

export default HomeRoutes