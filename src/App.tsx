import './App.css';
import SignUp from './components/Authentication/SignUp/SignUp';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
// import ResetPassword from './components/Authentication/ResetPassword';
import { Store } from './Redux/Store';
import { useAppSelector } from './Redux/hook';
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

function App() {

  const Store = useAppSelector(state => state)

  console.log(Store)
 
  const param = useParams()

  console.log(param)

  const [render, setRender] = useState(false)


  useEffect(() => {
    if(window.location.href === "http://localhost:3001/login" || window.location.href === "http://localhost:3001/signup"){
      setRender(false)
    } 
    else{
      setRender(true)
    }
  },[render])

  // signup --- token -- localstorage 
  //login --- token - localstorage

  // signup && login --- sidebar-content : signup-login

  return (
    <div className="App">
      {/* {
        render ? */}
     <div className='signup-login' >
      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </div>
      
      <div className='allPages'>
          {
            render
            ?
        <Pages />
        :
        ""
          }
        </div>
        {/* // } */}
    </div>
  );
}

export default App;
