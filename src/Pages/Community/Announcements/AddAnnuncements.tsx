import axios from 'axios'
import React, { useState } from 'react'
import { FaCamera, FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../Api/sourceApi'
import './announcements.css'

const AddAnnuncements = () => {

    const [announcement, setAnnouncement] = useState({
        title : ""
    })

    const navigate = useNavigate()

    const handleChange = (e : any ) => {

        const {name, value} = e.currentTarget

        setAnnouncement(prevData => ({
            ...prevData,
            [name] : value
        }))
    }


    // const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data'
    //     }
    //   }

    console.log(announcement.title)

    var fdataobj = new FormData();
  
    // Create formdata object and append the object
    // file to the name 'Blob file'
    // fdataobj.append("Blob File", announcement);
  

    const SaveAnnouncements = () => {
        axios.post(api + '/addAnnounce', announcement)
        .then(res => navigate('/community/announcements'))
        .catch(err => {throw err})
}

  return (
    <div className='addAnnouncements'>
        <div className='addannouncement-head'>
            <h3>Add Announcements</h3>
            <button onClick={SaveAnnouncements} className='btn bg-primary SaveAnnouncement'>Save</button>
        </div>
            <div className='add-inputs'>
                <div className='announcement-inputs'>
                    <FaEdit />
                    <input type='text' placeholder='Announcement title' name='title' onChange={handleChange}  />
                </div>
                {/* <div className='announcement-inputs'>
                    <FaCamera />
                    <input type='file' draggable={true} className='ann-file' name='image' onChange={handleChange} />
                </div> */}
            </div>
    </div>
  )
}

export default AddAnnuncements