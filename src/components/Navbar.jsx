import React from 'react'
import {Link}from 'react-router-dom'
import PropTypes from 'prop-types'
import  { useState } from 'react'



function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ">
        <li className="nav-item px-4">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-link px-4" to="/About">{props.page}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4" to="/Products">Catelogue</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4" to="/Products">Formulations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4" to="/Products">Distributions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4" to="/Products">Contact uss</Link>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable darkmode</label>
</div>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar



Navbar.defaultProps = {
  title: 'set title here',
  page:'set about page name'
};