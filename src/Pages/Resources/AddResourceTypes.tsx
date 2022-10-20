import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'

const AddResourceTypes = () => {

   const navigate = useNavigate()

//    type: type,
//             repeatbooking: repeatbooking,
//             mintime: mintime,
//             cancletime: cancletime

    
    const [addResourceType, setResourceType] = useState({
        type : "",
        repeatbooking : "",
        mintime : "",
        cancletime : ""
    })


    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

      const {name, value} = e.currentTarget
      
      setResourceType(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    console.log(addResourceType)

    const AddResourceType = () => {
      axios.post(api + '/addType' , addResourceType)
        .then(res => navigate('/resources/resourceTypes'))
        .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     AddUserData()
    // },[])

    


    return (
    <div className='add-User-form' >

      <div className="mb-3">
        <label htmlFor="res-type-type" className="form-label">Type</label>
        <input type="text" className="form-control" id="res-type-type" name='type' value={addResourceType.type}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-type-repeatbooking" className="form-label">Repeat Booking</label>
        <input type="text" className="form-control" id="res-type-repeatbooking" name='repeatbooking' value={addResourceType.repeatbooking}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-type-mintime" className="form-label">Mintime</label>
        <input className="form-control" id="res-type-mintime" name='mintime'  value={addResourceType.mintime} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="res-type-cancletime" className="form-label">Cancle Time</label>
        <input type="text" className="form-control" id="res-type-cancletime" name='cancletime' value={addResourceType.cancletime}  onChange={handleChange} />
      </div>

      <div className='mb-3 add-data'>
        <button className='btn bg-primary text-white add-data' onClick={AddResourceType}> Add Resource Type </button>
      </div>

    </div>
  )
}


export default AddResourceTypes
