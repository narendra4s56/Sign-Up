import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './assets/Home'

function App() {

  return (
   <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
         </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
