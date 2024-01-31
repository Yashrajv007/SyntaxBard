import React from 'react'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#2c78c9'}}>
      <div className="container">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li> */}
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`} onClick={props.togglemode}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              
        </div>
        <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'white'}}>enable dark mode</label>
      </div>
    </nav>


  )
}

export default Navbar