import './App.css';
import SignUp from './components/Authentication/SignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
// import ResetPassword from './components/Authentication/ResetPassword';
import { Store } from './Redux/Store';
import { useAppSelector } from './Redux/hook';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';

function App() {

  const Store = useAppSelector(state => state)

  console.log(Store)

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' />
        {/* <Route path='/resetPassword' element={<ResetPassword />} /> */}
      </Routes>
    </div>
  );
}

export default App;
