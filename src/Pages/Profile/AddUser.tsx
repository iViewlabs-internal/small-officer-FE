import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import User from './User'
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'

const AddUser = () => {

    const param : any = useParams()

    const store = useAppSelector(state => state)

   const data = store.PagesReducer.addUsers

   console.log(data)

    console.log(param.id)
    const id = param.id

    const [addUserData, setAddUserData] = useState({
      firstname : "",
      lastname : "",
      about : "",
      company : "",
      position : "",
      cityname : "",
      date : new Date().toLocaleDateString()
    })

    const displayData = data.filter((item : any, index : number) => index === +id)[0]


    // console.log(displayData.firstname + displayData.lastname)


    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

      const {name, value} = e.currentTarget
      
      setAddUserData(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    useEffect(() => {
        axios.post(api + '/addUser' , addUserData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })

    console.log(addUserData)

  return (
    <div className='add-User-form' >
      {/* firstname */}

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">First name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" name='firstname' value={addUserData.firstname}  onChange={handleChange} />
      </div>


      {/* lastname */}

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">Last name</label>
        <input type="text" className="form-control" id="exampleFormControlInput2" name='lastname' value={addUserData.lastname}  onChange={handleChange} />
      </div>

      

      {/* about */}

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea3" className="form-label">About</label>
        <textarea className="form-control" id="exampleFormControlTextarea3" name='about' rows={3} value={addUserData.about} onChange={handleChange} ></textarea>
      </div>


      {/* company */}

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput4" className="form-label">Company</label>
        <input type="text" className="form-control" id="exampleFormControlInput4" name='company' value={addUserData.company}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput5" className="form-label">Position</label>
        <input type="text" className="form-control" id="exampleFormControlInput5" name='position' value={addUserData.position}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput6" className="form-label">City name</label>
        <input type="text" className="form-control" id="exampleFormControlInput6" name='cityname' value={addUserData.cityname}  onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput7" className="form-label">Date</label>
        <input type="text" className="form-control" id="exampleFormControlInput7" name='date' value={addUserData.date}  onChange={handleChange} />
      </div>

      <div className='mb-3 add-data'>
        <button className='btn bg-primary text-white add-data'> Add Data </button>
      </div>

    </div>
  )
}

export default AddUser
