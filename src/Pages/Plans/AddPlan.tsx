import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'
import { FaArrowLeft } from 'react-icons/fa';

const AddPlan = () => {

    const param : any = useParams()

    const store = useAppSelector(state => state)

   const data = store.PagesReducer.addUsers

   console.log(data)

   const navigate = useNavigate()

    console.log(param.id)
    const id = param.id

    // type: type,
    // resourcename: resourcename,
    // description: description,
    // frequency: frequency,
    // price: price,
    // defaultfee: defaultfee,
    // defaultdeposit: defaultdeposit,
    // defaultcontractlength: defaultcontractlength



    const [addPlansData, setAddPlansData] = useState({
      type : "",
      resourcename : "",
      description : "",
      frequency : "",
      price : "",
      defaultfee : "",
      defaultdeposite : "",
      defaultcontractlength : ""
    })


    // console.log(displayData.firstname + displayData.lastname)


    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

      const {name, value} = e.currentTarget
      
      setAddPlansData(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    // console.log(addUserData)

    const AddPlanData = () => {
      axios.post(api + '/addPlan' , addPlansData)
        .then(res => navigate('/user'))
        .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     AddUserData()
    // },[])

    

  return (
    <div className='add-plan-page'>
        <div className='create-plan'>
            <p><FaArrowLeft className='back-arrow text-secondary' /></p>
            <h4 className='text-secondary'>Create new Plan</h4>
        </div>
        <div className='create-plan text-secondary'>
            <p></p>
            <p>Public facing</p>
        </div>
        <div className='add-Plan-form text-secondary' >
            <div className='inside-add-plan-form'>
                <div className="form-group bg-secondary">
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Select resources type</option>
                    <option>$18 Credit</option>
                    <option>1.5 Hour Credit-Promotion</option>
                    <option>1.5 Hour Credit for EB WorkStation...</option>
                    <option>3 hour credit</option>
                    <option>Admin</option>
                    </select>
                </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name*</label>
                        <input type="email" className="form-control" id="exampleInputName"  placeholder="Eg. Hot desk Flexi 50" />
                    </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea">Description*</label>
                    <textarea className="form-control" id="exampleFormControlTextarea" rows={4} placeholder='Eg. Access to any Hot desk Flexi 50 including partner location'></textarea>
                </div>
            </div>


            <div className='billing-preference'>
                <h5>Billing preferences</h5>
                <div className='inside-add-plan-form'>
                    <div className="form-group">
                        <label htmlFor="freqInput">Billing frequency</label>
                        <input type="email" className="form-control" id="freqInput"  placeholder="Recurs monthly" />
                    </div>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Free
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPlan
