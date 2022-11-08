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
import AddResource from './Resources/AddResource'
import AddResourceTypes from './Resources/AddResourceTypes'
import ResourceTypes from './Resources/ResourceTypes'
import AllInvoices from './Invoices/AllInvoices'
import InvoiceItems from './Invoices/InvoiceItems'
import Payments from './Invoices/Payments'
import PaymentReceipt from './Invoices/PaymentReceipt'


const Pages = () => {

  const navigate = useNavigate()

  useEffect(() => {
  
   if(!localStorage.getItem('signup') && !localStorage.getItem('login')){
      navigate('signup')
    }
    else if(localStorage.getItem('signup') && !localStorage.getItem('login')){
      navigate('login')
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
              <Route path='/resources/allResources' element={<AllResources />} />
              <Route path='/resources/addResources' element={<AddResource />} />
              <Route path='/resources/resourceTypes' element={<ResourceTypes />} />
              <Route path='/resources/addResourceTypes' element={<AddResourceTypes />} />
              <Route path='/Invoices' element={<AllInvoices />} />
              <Route path='/InvoiceItems' element={<InvoiceItems />} />
              <Route path='/Payments' element={<Payments />} />
              <Route path='/PaymentReceipt' element={<PaymentReceipt />} />
            </Routes>
          </div>
        </div>
      </div>
  ) 
}

export default Pages
