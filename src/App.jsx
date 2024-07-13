
import './App.css'
// import CurrencyConvertor from './components/currency-convertor'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Header from './components/Header'

function App() {

  return(
    <>
      <Header />
      <Routes>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/sign-in' element={<Login />}/>
        
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
