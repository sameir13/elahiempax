import React from 'react'

const Navbar = () => {
  return (
        <div className="navbar">
            <nav>
                <div className='logo'>
                  <img src="https://www.elahiimpex.com/images/logo-mona.png" alt="Elahi Empex" />
                </div>
                    <ul>
                      <li className="list-item"><a href=''>Home</a></li>
                      <li className="list-item"><a href=''>About</a></li>
                      <li className="list-item"><a href=''>Contact</a></li>
                      <li className="list-item"><a href=''>Products</a></li>
                    </ul>
            </nav>
        </div>
  )
}

export default Navbar