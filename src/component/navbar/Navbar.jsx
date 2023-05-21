import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/logo-3.svg' 

export default function Navbar({crrUser,clearData}) {



  const Navigate = useNavigate();

  function Logout() {
    clearData();
    Navigate('/login')
  }




  return <>

  <div className="container-fluid fixed-top">
  <nav className="navbar navbar-expand-lg nav-style mt-2 rounded-3 bg-white px-4 ">
  

    <Link className="fs-5 fw-bold navbar-brand" to="home">
      <img src={logo} alt="logo" />
    </Link>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      {/* the center side in navbar */}

      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link text-dark" aria-current="page" to="home">Home</Link>
        </li>


        <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link text-dark" to="allorders">all orders</Link>
        </li>
    

        <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link text-dark" to="brands"> Brands</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link text-dark" to="footer">Contact Us</Link>
        </li> */}

      </ul>




      {/* the right side part in Navbar  */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        {crrUser? <>

          <li className='d-flex align-items-center'>
          <Link to={'https://www.facebook.com/profile.php?id=100007580614645'} target='_target'><i class=" fa-brands fa-facebook fs-6 text-dark px-3"></i></Link>
            <Link to={'https://wa.me/01152762201'} target='_target'><i class=" fa-brands fa-whatsapp fs-6 WH text-dark  px-3"></i></Link>
            <Link to={'https://www.linkedin.com/in/ahmed-emad-a777a81a2/'} target='_target'><i class=" fa-brands fa-linkedin fs-6 LI text-dark px-3"></i></Link>
            <Link target='_target'><i class=" fa-brands fa-twitter  fs-6 TW text-dark px-3"></i></Link>
          
        </li>

          <li className="nav-item-icon">
          <Link className="fs-5 fw-bold nav-link text-dark" to="cart"> <i class="fa-solid  fs-4 fa-cart-shopping"></i></Link>
        </li>

            {/* Drop Down menue */}

          <li className="nav-item-icon">

            <div class="dropdown nav-item-icon">

              <button class="border-0 bg-transparent"  data-bs-toggle="dropdown" aria-expanded="false">
              
                <i class="fa-regular fs-4 fa-user"></i>
              
              </button>

                  <ul class="dropdown-menu">

                    <li>
                      <Link className="dropdown-item"  aria-current="page" to="profile">My Account</Link>
                      </li>

                    <li><a class="dropdown-item" href="#">Contact</a></li>
                    <li><a class="dropdown-item" href="#">About</a></li>
                    <li><button className='btn btn-primary w-100 dropdown-itemdropdown-item '><span  onClick={Logout}  >LogOut</span></button></li>
                  </ul>
              </div>
          
        </li>

        </> : <>
        <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link" to="register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="fs-5 fw-bold nav-link" aria-current="page" to="login">Login</Link>
        </li>
</>}

   

      </ul>

    </div>
</nav>
</div>
  
  
  
  </>
}
