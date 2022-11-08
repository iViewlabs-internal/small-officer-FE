import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBack2Fill, RiDeleteBinFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import Community from '../Community'
import './infoPage.css'

const AddInfo = () => {

  const [info, setInfo] = useState({
    title : "",
    description : ""
})

const [infoData, setInfoData] = useState([])

const [load, setLoad] = useState(false)

const [edit, setEdit] = useState(false)

const [datatoEdit, setDataToEdit] : any = useState([])

const [showBlock, setShowBlock] = useState(false)


const navigate = useNavigate()

const api = process.env.REACT_APP_API_URL

const handleChange = (e : any ) => {

    const {name, value} = e.currentTarget

    setInfo(prevData => ({
        ...prevData,
        [name] : value
    }))
}

const getInfo = () => {
  axios.get(api + '/AddInfo')
  .then(res => {
    setInfoData(res.data)
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  getInfo()
},[load])


var fdataobj = new FormData();

const SaveInfo = () => {
    axios.post(api + '/addInfo', info)
    .then(res => {
      setLoad(!load)
      setInfo(data => ({
        ...data,
        title : "",
        description : ""
      }))
    })
    .catch(err => {throw err})

    setShowBlock(false)
}

const [data, setData] = useState({
  title : "",
  description : ""
})

const handleEdit = (e : any) => {
  const {name, value} = e.currentTarget

  setData(prevData => ({
    ...prevData,
    [name] : value
  }))

}


const editId = datatoEdit && datatoEdit['id']

const EditInfo = (id : any) => {

  // console.log(id)
  
  axios.get(api + `/AddInfo/${id}`)
  .then(res => {
    setDataToEdit(res.data)
    setEdit(true)
    setData(prevData => ({
      ...prevData,
      title : res.data.title,
      description : res.data.description
    }))
    // console.log(datatoEdit)
    // console.log('loaddd')
    getInfo()
    setLoad(!load)
  })
  .catch(err => console.log(err)) 
  
}

const SaveEditInfo = (id : any) => {
  axios.put(api + `/updateInfo/${id}`, data)
  .then(res => {
    setLoad(!load)
    setEdit(false)
  })
  .catch(err => console.log(err))

  // setEdit(true)
  // setLoad(!load)

}


const DeleteInfo = (id : any) => {
// console.log(id)
  axios.delete(api + `/DeleteInfo/${id}`)
  .then(res => setLoad(!load))
  .catch(err => console.log(err))
}


const AddBlock = () => {
  setShowBlock(true)
}

  return (
    <div className='addInfo'>
      <div className='info'>
        <Community />
      </div>
        <div className='addInfo-head'>
            <button className='btn bg-primary text-white SaveInfoBtn' onClick={AddBlock}>Add Block</button>
        </div>

        {
          infoData.map((item : any , index : number) => {
            return (
              edit && item.id === editId ? <div className='add-inputs'>
                <div className='info-inputs'>
                   <input className='form-control' type='text' value={data.title} name='title' onChange={handleEdit}  />
                </div>   
                <div className='info-inputs'>
                   <textarea className='form-control' rows={4}  value={data.description} name='description' onChange={handleEdit} />
                </div>   
                  <div className='info-edits'>
                  <button className='btn bg-primary SaveInfoBtn' onClick={() => SaveEditInfo(item.id)}>Save</button>
                    <RiDeleteBinFill className='info-delete text-danger' onClick={() => DeleteInfo(item.id)} />
                  </div>
              </div>
              :

              <div className='add-inputs show-info'>
                  <div className='input-text'>
                    <p className='info-title'>{item.title}</p>
                    <p className='info-description'>{item.description}</p>
                  </div>
                  <div className='info-edits'>
                  <button className='btn bg-primary SaveInfoBtn' onClick={() => EditInfo(item.id)}>Edit</button>
                    <RiDeleteBinFill className='info-delete text-danger' onClick={() => DeleteInfo(item.id)} />
                  </div>
              </div> 

            )
          })
        }

        {
          showBlock && <div className='add-inputs'>
          <div className='info-inputs'>
              <input type='text' placeholder='Enter title' name='title' value={info.title} onChange={handleChange}  />
          </div>
          <div className='info-inputs'>
              <textarea rows={3} className='form-control info-textarea' name='description' placeholder='Enter Description' value={info.description} onChange={handleChange} />                
          </div>
          <div className='info-edits'>
            <button onClick={SaveInfo} className='btn bg-primary SaveInfoBtn'>Save</button>
            <RiDeleteBinFill className='info-delete text-danger' onClick={() => setShowBlock(false)} />
          </div>
    </div>
        }

    </div>
  )
}


export default AddInfo