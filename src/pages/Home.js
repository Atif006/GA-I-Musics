import React from 'react'
import { BrowserRouter,Routes,Route } from  'react-router-dom'
import Favorities from './Favorities'
import Feed from './Feed'
import Library from './Library'
import Player from './Player'
import Trending from './Trending'
import './home.css'
import SideBar from '../components/sidebar/SideBar'

const Home = () => {
  return (
    <BrowserRouter>
    <div className='main-body'>
        <SideBar/>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/favorites' element={<Favorities/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/library' element={<Library/>}/>

        </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default Home