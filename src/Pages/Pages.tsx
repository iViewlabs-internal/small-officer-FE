import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Calender from './Calender/Calender'
import Chat from './Chat/Chat'
import AddAnnuncements from './Community/Announcements/AddAnnuncements'
import Announcements from './Community/Announcements/Announcements'
import Community from './Community/Community'
import AddInfo from './Community/InfoPage/AddInfo'
import Home from './Home/Home'
import AddPlan from './Plans/AddPlan'
import Plans from './Plans/Plans'
import AddUser from './Profile/AddUser'
import Profile from './Profile/Profile'
import User from './Profile/User'
import AllResources from './Resources/AllResources'
import InvoiceItems from './Resources/InvoiceItems'
import Payments from './Resources/Payments'
import AddResource from './Resources/AddResource'
import AddResourceTypes from './Resources/AddResourceTypes'
import ResourceTypes from './Resources/ResourceTypes'


const Pages = () => {

  const navigate = useNavigate()



  useEffect(() => {
  
   if(!localStorage.getItem('signup') && !localStorage.getItem('login')){
      navigate('signup')
    }

  },[])

  return (
      <div className='sidebar-content' >
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='header-pages'>
          <div className='header'>
            <Header />
          </div>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/calender' element={<Calender />} /> */}
              <Route path='/chat' element={<Chat />} />
              <Route path='/user' element={<User />} />
              <Route path='/user/addUser' element={<AddUser />} />
              <Route path='/user/:id' element={<Profile />} />
              <Route path='/community' element={<Community />} />
              <Route path='/community/announcements' element={<Announcements />} />
              <Route path='/community/addAnnouncements' element={<AddAnnuncements/>} />
              <Route path='/community/infoPage' element={<AddInfo />} />
              <Route path='/plans' element={<Plans />} />
              <Route path='/addPlan' element={<AddPlan/>} />
              {/* <Route path='/resources' element={<Resources />} /> */}
              <Route path='/resources/allResources' element={<AllResources />} />
              <Route path='/resources/addResources' element={<AddResource />} />
              <Route path='/resources/resourceTypes' element={<ResourceTypes />} />
              <Route path='/resources/addResourceTypes' element={<AddResourceTypes />} />
              <Route path='/resources/invoiceItems' element={<InvoiceItems />} />
              <Route path='/resources/payments' element={<Payments />} />
            </Routes>
          </div>
        </div>
      </div>
  ) 
}

export default Pages
