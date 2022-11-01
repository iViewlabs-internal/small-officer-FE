import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'

const AddResource = () => {

   const navigate = useNavigate()

//     {
//       "name": "Bhavisha",
//       "description": "description...",
//       "type": "t2",
//       "location": "amd",
//       "personcapacity": 4
// }

    
    const [addResourceData, setResourceData] = useState({
      name : "",
      description : "",
      type : "",
      location : "",
      personcapacity : ""
    })


    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

      const {name, value} = e.currentTarget
      
      setResourceData(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    // console.log(addResourceData)

    const AddResourceData = () => {
      axios.post(api + '/addResource' , addResourceData)
        .then(res => navigate('/resources/allResources'))
        .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     AddUserData()
    // },[])

    


    return (
    <div className='add-User-form' >

      <div className="mb-3">
        <label htmlFor="res-name" className="form-label">Name</label>
        <input type="text" className="form-control" id="res-name" name='name' value={addResourceData.name}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-desc" className="form-label">Description</label>
        <input type="text" className="form-control" id="res-desc" name='description' value={addResourceData.description}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-type" className="form-label">Type</label>
        <input className="form-control" id="res-type" name='type'  value={addResourceData.type} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-location" className="form-label">Location</label>
        <input type="text" className="form-control" id="res-location" name='location' value={addResourceData.location}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-personcapacity" className="form-label">Position</label>
        <input type="text" className="form-control" id="res-personcapacity" name='personcapacity' value={addResourceData.personcapacity}  onChange={handleChange} />
      </div>  

      <div className='mb-3 add-data'>
        <button className='btn bg-primary text-white add-data' onClick={AddResourceData}> Add Resource </button>
      </div>

    </div>
  )
}


export default AddResource
