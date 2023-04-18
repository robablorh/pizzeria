import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-wine">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link navnew" href="/">PIZZAMALIA</a>
            </li>
        </ul> 
    </div>
    
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item" >
                <a className="nav-link navnew" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link navnew" href="/"> About Pizza </a>
            </li>
            <li className="nav-item">
                <a className="nav-link navnew" href="/">Pizza Types</a>
            </li>
        
        </ul>
    </div>
</nav>
  )
}

export default Navbar
