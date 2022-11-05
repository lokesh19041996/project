import React from 'react'
import Admin from './Admin'
import Home from './Home'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Createproduct from './Createproduct'
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to="/" className='navbar-brand'>React Routing Project</Link>
          <div className='mr-auto'>
            <ul className='navbar-nav'>
              <li className='nav-list'><Link className="nav-link" to='/home'>Home</Link></li>
              <li className='nav-list'><Link className='nav-link' to="/createproduct">product</Link></li>
              <li className='nav-list'><Link className='nav-link' to="/Admin">Admin</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='home' element={<Home/>}></Route>
          <Route path="admin" element={<Admin/>}></Route>
          <Route path="createproduct" element={<Createproduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Navbar