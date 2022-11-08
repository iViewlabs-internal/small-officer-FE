import './App.css';
import SignUp from './components/Authentication/SignUp/SignUp';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
// import ResetPassword from './components/Authentication/ResetPassword';
import { Store } from './Redux/Store';
import { useAppDispatch, useAppSelector } from './Redux/hook';
// import Home from './Pages/Home/Home';
// import Sidebar from './components/Sidebar/Sidebar';
// import Calender from './Pages/Calender/Calender';
// import Chat from './Pages/Chat/Chat';
// import Profile from './Pages/Profile/Profile';
// import Community from './Pages/Community/Community';
// import Announcements from './Pages/Community/Announcements';
// import InfoPage from './Pages/Community/InfoPage';
// import Plans from './Pages/Plans/Plans';
// import Resources from './Pages/Resources/Resources';
// import AllResources from './Pages/Resources/AllResources';
// import InvoiceItems from './Pages/Resources/InvoiceItems';
// import Payments from './Pages/Resources/Payments';
// import User from './Pages/Profile/User';
import Pages from './Pages/Pages';
import { useEffect, useState } from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import ResetPasswordEmail from './components/Authentication/ResetPassword/ResetPasswordEmail';
import axios from 'axios';
import { signUpData } from './Redux/Actions/Authentication';

function App() {

  const Store = useAppSelector(state => state)

  const dispatch = useAppDispatch()

  // console.log(Store)
 
  const param = useParams()

  // console.log(param)

  const [render, setRender] = useState(false)
  
  const api = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get( api + '/Register')
      .then(res => dispatch(signUpData(res.data)))
      .catch(err => console.log(err))
  },[])

  // registerLicense('License Key');


  
  // useEffect(() => {
  //   if(window.location.pathname === "/login" || window.location.pathname === "/signup"){
  //     setRender(false)
  //   } 
  //   else{
  //     setRender(true)
  //   }
  // },[window.location.pathname])

  // console.log(render)

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path='/reset-password-email' element={<ResetPasswordEmail />} />
        <Route path='*' element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
