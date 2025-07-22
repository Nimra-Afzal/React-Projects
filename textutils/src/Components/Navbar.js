import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) { 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link> {/*we had used props its mean k
    ham reuseable bna skta hain components ko jesa idr ma na props.title likha ha to app.js
    ma ma srf name pas kron gi props means property ab ma isa ksi aur app ma use kron gi to app.js
    ma us lihaz sa name rkh skti hun
    data passedd from a parent component to a child component*/}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">{props.home} </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.AboutUs}</Link>
        </li>
        
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">{props.Search}</button>
      </form> */}
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">  Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,//iska mtlb ha ka ye zrori ha likhna wrna erroray ga 
    AboutUs:PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    Search:PropTypes.string.isRequired
}
