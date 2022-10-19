import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => {

  const renderPage = window.location.pathname

  return (
    <div className='toggle-pages'>
      <Link to={'/community/announcements'} className={renderPage == '/community/announcements' ? 'announce-page' : 'community' }>Announcement</Link>
      <Link to={'/community/addInfo'} className={renderPage == '/community/addInfo' ? 'infoo-page' : 'community' }> Add Info</Link>
    </div>
  )
}

export default Community
