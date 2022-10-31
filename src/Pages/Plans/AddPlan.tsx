import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { api } from '../../Api/sourceApi'
import { useAppSelector } from '../../Redux/hook'
import { FaArrowLeft } from 'react-icons/fa';
import './plan.css'

const AddPlan = () => {

    const param : any = useParams()

    const store = useAppSelector(state => state)

   const data = store.PagesReducer.addUsers

   console.log(data)

   const navigate = useNavigate()

    console.log(param.id)
    const id = param.id

//     "type": "small....",
// "resourcename": "flexi 50",
// "description": "access to any hot desk.....",
// "frequency": "Recurs weekly",
// "price": 62,
// "defaultfee": 25,
// "defaultdeposit": 15,
// "defaultcontractlength": 2



    const [addPlansData, setAddPlansData] = useState({
      type : "",
      resourcename : "",
      description : "",
      frequency : "",
      price : 0,
      defaultfee : 0,
      defaultdeposit: 0,
      defaultcontractlength : 0
    })

//     {
//         "type": "small officer",
//         "resourcename": "flexi 50",
//         "description": "access to any hot desk.....",
//         "frequency": "Recurs weekly",
//         "price": 62,
//         "defaultfee": 25,
//         "defaultdeposit": 15,
//         "defaultcontractlength": 2
// }


    // console.log(displayData.firstname + displayData.lastname)


    const handleChange = (e : any ) => {

      const {name, value} = e.currentTarget
      
      setAddPlansData(prevData => ({
        ...prevData,
        [name] : value
      }) )

    }

    console.log(addPlansData)

    const AddPlanData = () => {
      axios.post(api + '/addPlan' , addPlansData)
        .then(res => {
            navigate('/plans')
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    


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
                    <select className="form-control" name='type' onChange={handleChange}>
                    <option>Select resources type</option>
                    <option value='$18 Credit'>$18 Credit</option>
                    <option value='1.5 Hour Credit-Promotion'>1.5 Hour Credit-Promotion</option>
                    <option value='1.5 Hour Credit for EB WorkStation...'>1.5 Hour Credit for EB WorkStation...</option>
                    <option value='3 hour credit'>3 hour credit</option>
                    <option value='Admin'>Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="resourcename">Name*</label>
                    <input type="text" className="form-control" id="resourcename" value={addPlansData.resourcename} name='resourcename' onChange={handleChange}  placeholder="Eg. Hot desk Flexi 50" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea">Description*</label>
                    <textarea className="form-control" id="exampleFormControlTextarea" rows={4} value={addPlansData.description} name='description' onChange={handleChange} placeholder='Eg. Access to any Hot desk Flexi 50 including partner location'></textarea>
                </div>
            </div>


            <div className='billing-preference'>
                <h5>Billing preferences</h5>
                <div className='inside-add-plan-form'>
                    <div className="form-group">
                        <label htmlFor="freqInput">Billing frequency</label>
                        <input type="text" className="form-control" id="freqInput" name='frequency' value={addPlansData.frequency} onChange={handleChange}  placeholder="Recurs monthly" />
                    </div>

                    {/* <div>
                    <h5>Price (before tax)</h5>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Tax" id="Tax1" value={addPlansData.price} />
                            <label className="form-check-label" htmlFor="Tax1">
                                <div className="input-group mb-3" id='tax'>
                                    <span className="input-group-text" >USD</span>
                                    <input type="text" className="form-control" id='tax' placeholder="Eg, 123.00" aria-label="fee" aria-describedby="basic-addon1" name='email' value={addPlansData.price} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Tax" id="Tax2" value="option2" checked />
                            <label className="form-check-label" htmlFor="Tax2">
                                Free
                            </label>
                        </div>
                    </div> */}

                <div >
                    <label htmlFor="pricee" id='price' >Price</label>
                    <div className="input-group mb-3" id='price'>
                        <span className="input-group-text" id="basic-price">USD</span>
                        <input type="text" className="form-control" id='pricee' placeholder="Eg, 123.00" aria-label="pricee" aria-describedby="basic-price" name='price' value={addPlansData.price} onChange={handleChange} />
                    </div>
                </div>

                    <div >
                    <label htmlFor="fee" id='Fee' >Default set up fee</label>
                    <div className="input-group mb-3" id='Fee'>
                        <span className="input-group-text" id="basic-addon1">USD</span>
                        <input type="text" className="form-control" id='fee' placeholder="Eg, 123.00" aria-label="fee" aria-describedby="basic-addon1" name='defaultfee' value={addPlansData.defaultfee} onChange={handleChange} />
                    </div>
                    </div>

                    <div >
                    <label htmlFor="deposite" id='depositee' >Default deposite</label>
                    <div className="input-group mb-3" id='depositee'>
                        <span className="input-group-text" id="basic-addon2">USD</span>
                        <input type="text" className="form-control" id='deposite' placeholder="Eg, 123.00" aria-label="deposite" aria-describedby="basic-addon2" name='defaultdeposit' value={addPlansData.defaultdeposit} onChange={handleChange} />
                    </div>
                    </div>

                    <div >
                    <label htmlFor="contractt" id='contract' >Default Contract Length</label>
                    <div className="input-group mb-3" id='contract'>
                        <span className="input-group-text" id="basic-length">USD</span>
                        <input type="text" className="form-control" id='contractt' placeholder="40" aria-label="contract" aria-describedby="basic-length" name='defaultcontractlength' value={addPlansData.defaultcontractlength} onChange={handleChange} />
                    </div>
                    </div>

                    {/* <div>
                    <h5>Default contract length</h5>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="contract" id="contract" value="option1" />
                            <label className="form-check-label" htmlFor="contract">
                                <div className="input-group mb-3" id='tax'>
                                    <input type="text" className="form-control contract-one" id='tax' placeholder="Eg, 5" aria-label="fee" aria-describedby="basic-addon1" value={addPlansData.defaultcontractlength}  onChange={handleChange} />
                                    days
                                </div>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="contract" id="contract2" value="option2" checked />
                            <label className="form-check-label" htmlFor="contract2">
                                Does not end
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="contract" id="contract3" value="option2" checked />
                            <label className="form-check-label" htmlFor="contract3">
                                Users can choose end date
                            </label>
                        </div>
                    </div> */}

                    <div className='mb-3 mt-5'>
                        <button className='btn bg-primary text-white add-data' onClick={AddPlanData}> Add Data </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPlan
