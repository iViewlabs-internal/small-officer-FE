import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../Api/sourceApi'
import { addUsers } from '../../Redux/Actions/Pages'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import './profile.css'
// import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import '../../components/Pagination/pagination.scss'
import Pagination from '../../components/Pagination/Pagination'

let PageSize = 10;

const User = () => {

    // const [users, setUsers] = useState([])
    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)
    // console.log(store)

    const users = store.PagesReducer.addUsers

    // console.log(users)

    const navigate = useNavigate()

    const [search, setSearch] = useState('')


    const fetchUsersData = async () => {
        axios.get(api + '/AddUser')
        .then(res => dispatch(addUsers(res.data)))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchUsersData()
    },[])

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const user = users.filter((item : any,index : number) => item.firstname.toLowerCase() === search )

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return users.slice(firstPageIndex, lastPageIndex);
    }, [users, currentPage]);

    
    // console.log(user)

    // console.log(users)

  return (

    
    <div className='users'>

        <div className='add-users' >
            <h4>Users</h4>
            <button className='btn bg-primary adduser-btn add ' onClick={() => navigate('/user/addUser')} >Add User</button>
        </div>

        <div className='add-users-search'>
            <div className="form-group has-search search-box">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" value={search} onChange={handleChange} />
            </div>
        </div>

        <div className='add-users-section' >
        <table className='users-table' >
            <thead>
                <tr className='user-headers'>
                    {/* <th><input type='checkbox' className='user-checkbox'/></th> */}
                    <th>Name</th>
                    <th>Primary Location</th>
                    <th>Status</th>
                    <th>Joined</th>
                </tr>
            </thead>
            <tbody>
                {
                    // !users ? 
                    // <ReactLoading type={'spinningBubbles'} color='#000' />
                    //  : 
                     
                     search ? 

                    user.map((item : any, index : number) => {
                        return (
                            <>
                            <tr className='user-headers' key={item.id}>
                                {/* <td><input type='checkbox' className='user-checkbox'/></td> */}
                                <td className='user-name'><Link to={`/user/${index+1}`} className='user-name' >{item.firstname} {item.lastname}</Link></td>
                                <td>{item.city}</td>
                                <td className='text-success' >Active</td>
                                <td>{item.date}</td>
                            </tr>
                            <hr />
                            </>
                        )
                    })
                    :
                    currentTableData.map((item : any, index : any) => {
                        return (
                            <>
                            <tr className='user-headers'>
                                {/* <td><input type='checkbox' className='user-checkbox'/></td> */}
                                <td className='user-name'><Link to={`/user/${index+1}`} className='user-name' >{item.firstname} {item.lastname}</Link></td>
                                <td>Ahmedabad</td>
                                <td className='text-success' >Active</td>
                                <td>{item.date}</td>
                            </tr>
                            <hr />
                            </>
                        )
                    })
                    
                }
            </tbody>
        </table>
        </div>

        <div>
            {
                search ? "" : 
                <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={users.length}
    pageSize={PageSize}
    onPageChange={(page : number) => setCurrentPage(page)}
  />
            }
    
    </div>


    </div>
  )
}

export default User


