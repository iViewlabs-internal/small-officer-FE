import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Calender from './Calender/Calender'
import Chat from './Chat/Chat'
import Announcements from './Community/Announcements'
import Community from './Community/Community'
import InfoPage from './Community/InfoPage'
import Home from './Home/Home'
import Plans from './Plans/Plans'
import AddUser from './Profile/AddUser'
import Profile from './Profile/Profile'
import User from './Profile/User'
import AllResources from './Resources/AllResources'
import InvoiceItems from './Resources/InvoiceItems'
import Payments from './Resources/Payments'
import Resources from './Resources/Resources'


const Pages = () => {
  return (
    <div>
      <div className='sidebar-content' >
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='header-pages'>
          <div className='header'>Header</div>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/chat' element={<Chat />} />
              
              
              <Route path='/user' element={<User />} />
              <Route path='/user/addUser' element={<AddUser />} />
              <Route path='/user/:id' element={<Profile />} />
              <Route path='/community' element={<Community />} />
              <Route path='/community/announcements' element={<Announcements />} />
              <Route path='/community/infoPage' element={<InfoPage />} />
              <Route path='/plans' element={<Plans />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/resources/allResources' element={<AllResources />} />
              <Route path='/resources/invoiceItems' element={<InvoiceItems />} />
              <Route path='//resources/payments' element={<Payments />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pages
