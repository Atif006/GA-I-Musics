import React from 'react'
import './sidebar.css'
import SideBarButton from './SideBarButton'
import { MdFavorite, MdFeed, MdLogout, MdOutlineLibraryMusic } from 'react-icons/md';
import {TbPlayerPlayFilled} from 'react-icons/tb'
import {HiTrendingUp} from 'react-icons/hi'

const SideBar = () => {
  return (
    
    <div className='sideBar-screen'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosa6RSEJq-NYipNXyQiXOOC_dDuOZPzUO4oM294s4&s' alt='profile-image' className='image-profile'/>
        <div>
            <SideBarButton to={'/favorites'} title="Favorites" icon={<MdFavorite/>}/>
            <SideBarButton to={'/feed'} title="Feed" icon={<MdFeed/>}/>
            <SideBarButton to={'/player'} title="Player" icon={<TbPlayerPlayFilled/>}/>
            <SideBarButton to={'/trending'} title="Trending" icon={<HiTrendingUp/>}/>
            <SideBarButton to={'/library'} title="Library" icon={<MdOutlineLibraryMusic/>}/>
        
        </div>
        <SideBarButton to={'/logout'} title="LogOut" icon={<MdLogout/>}/>
    </div>
   
    
  )
}

export default SideBar