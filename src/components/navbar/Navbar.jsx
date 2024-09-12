import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { GiWhiteBook } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/">
    <b><GiWhiteBook />NOTES</b>
    </Link>
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">

        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link active" to="/about">About</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link active  " to="/note">Note</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
