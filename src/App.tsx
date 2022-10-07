import './App.css';
import SignUp from './components/Authentication/SignUp/SignUp';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
// import ResetPassword from './components/Authentication/ResetPassword';
import { Store } from './Redux/Store';
import { useAppSelector } from './Redux/hook';
import Home from './Pages/Home/Home';
import Pages from './Pages/AllPages/Pages';

function App() {

  const Store = useAppSelector(state => state)

  console.log(Store)

  const param = useParams()

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/resetPassword' element={<ResetPassword />} /> */}
      </Routes>
      <div style={{display : 'hidden'}}>
        <Pages />
      </div>
    </div>
  );
}

export default App;
