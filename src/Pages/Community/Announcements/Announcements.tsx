import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../Api/sourceApi'
import Community from '../Community'

const Announcements = () => {

  const [announce, setAnnounce] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(api + '/AddAnnounce')
    .then(res => setAnnounce(res.data))
    .catch(err => console.log(err))
  },[])


  return (
    <div className='announcements'>
      <div>
        <Community />
      </div>
      <div className='add-announcement' >
            <h4>Announcements</h4>
            <button className='btn bg-primary announce-btn' onClick={() => navigate('/community/addAnnouncements')} > + Add Announcement</button>
        </div>
      <table className='announce-table'>
        <thead>
          <tr className='announce-head'>
            <th>Title</th>
            <th>Active</th>
          </tr>
        </thead>
        <hr />
        <tbody>
          {
            announce.map((item : any , index : number) => {
              return (
                <>
                <tr className='announce-data'>
                  <td>{item.title}</td>
                  <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  </td>
                </tr>
                <hr className='hori' />
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Announcements
