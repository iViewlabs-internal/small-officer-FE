import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useAppSelector } from '../../Redux/hook'
import Home from '../Home/Home'
import './pages.css'

const Pages = () => {

  const store = useAppSelector(state => state)

  const username = store.AuthReducer.login.username

  return (
    <div className='main-pages
    ' style={{display : 'flex'}} >
        <div className='sidebar' >
            {/* <Sidebar /> */}sidebar
        </div>

        <div className='content' >
            <div className='header' >
              <div>
                sidebar icon
              </div>
              <div>
                username
              </div>
            </div>
            <div>
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
            </div>
        </div>
    </div>
  )
}

export default Pages
