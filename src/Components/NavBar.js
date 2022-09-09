import React from 'react'

export default function NavBar() {
  return (
    
    <div className="container-fluid" style={{backgroundColor:  'rgb(14, 14, 14)'}}>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <img src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" style={{width: '70px'}} />     </a>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-primary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-light">Features</a></li>
        <li><a href="#" className="nav-link px-2 link-light">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-light">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-light">About</a></li>
      </ul>
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  )
}



