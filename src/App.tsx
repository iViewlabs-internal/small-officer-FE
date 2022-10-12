import './App.css';
import SignUp from './components/Authentication/SignUp/SignUp';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
// import ResetPassword from './components/Authentication/ResetPassword';
import { Store } from './Redux/Store';
import { useAppSelector } from './Redux/hook';
import Home from './Pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Calender from './Pages/Calender/Calender';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import Community from './Pages/Community/Community';
import Announcements from './Pages/Community/Announcements';
import InfoPage from './Pages/Community/InfoPage';
import Plans from './Pages/Plans/Plans';
import Resources from './Pages/Resources/Resources';
import AllResources from './Pages/Resources/AllResources';
import InvoiceItems from './Pages/Resources/InvoiceItems';
import Payments from './Pages/Resources/Payments';
import User from './Pages/Profile/User';

function App() {

  const Store = useAppSelector(state => state)

  console.log(Store)
 
  const param = useParams()

  console.log(param)

  return (
    <div className="App">
      <div className='signup-login' >
      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </div>
      <div className='sidebar-content' >
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='header-pages'>
          <div className='header'>Header</div>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/user/1' element={<Profile />} />
              <Route path='/user' element={<User />} />
              <Route path='/community' element={<Community />} />
              <Route path='/community/announcements' element={<Announcements />} />
              <Route path='/community/infoPage' element={<InfoPage />} />
              <Route path='/plans' element={<Plans />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/resources/allResources' element={<AllResources />} />
              <Route path='/resources/invoiceItems' element={<InvoiceItems />} />
              <Route path='//resources/payments' element={<Payments />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
