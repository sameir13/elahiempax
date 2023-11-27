import {useState} from 'react'

const Navbar = () => {

  var [mobileNavOpen,setMobileNavOpen] = useState(false)

  return (
        <div className="navbar">
            <nav>
                <div className='logo'>
                  <img src="/images/logo.png" alt="Elahi Empex" />
                </div>


                <ul className={mobileNavOpen ? "active" : ""}>
                  <li>
                    <a href=''>
                      <img src="/images/logo.png" alt="" />
                    </a></li>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>About</a></li>
                  <li><a href=''>Contact</a></li>
                  <li><a href=''>Products</a></li>
                </ul>

                <div onClick={()=>setMobileNavOpen(!mobileNavOpen)} className="bars">
                  <i className={`bx bx-${mobileNavOpen ? "x":"menu"}`}></i>
                </div>

            </nav>
        </div>
  )
}

export default Navbar