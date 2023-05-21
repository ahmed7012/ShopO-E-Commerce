import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  


  

  <footer class="my-5 mb-3 ">
<div className='container'>


  <hr className='text-secondary ' />
      <div className="row my-5">

        <div className="col-md-3">
          <div className="foot-f-item d-flex">

            <div>
            <h4 className='fs-5 fw-bold'>Pro Quality Support</h4>
            <h5>24/7 Live support</h5>
            </div>

            <div  className='foot-icon'>
            <i class=" fa-solid fa-headset f fs-2 s-1 text-primary ms-3 "></i>
            </div>

          </div>
        </div>


        <div className="col-md-3">  
          <div className="foot-f-item d-flex">

            <div>
            <h4 className='fs-5 fw-bold'>24 Hour Return Policy</h4>
            <h5>No question ask</h5>
            </div>

            <div  className='foot-icon'>
            <i class="fa-solid fa-money-check-dollar  fs-1 text-primary ms-3 "></i>
            </div>

          </div>
        </div>


        <div className="col-md-3">
          <div className="foot-f-item d-flex">

            <div>
            <h4 className='fs-5 fw-bold'>Money Back Guarantee</h4>
            <h5>Within 10 days</h5>
            </div>

            <div  className='foot-icon'>
            <i class="fa-solid fa-money-bill-trend-up fs-1 text-primary ms-3"></i>
            </div>

          </div>
        </div>
        <div className="col-md-3">
          <div className="foot-f-item d-flex">

            <div>
            <h4 className='fs-5 fw-bold'>Fast & Secure Delivery</h4>
            <h5>Tell about your service</h5>
            </div>

            <div  className='foot-icon'>
            <i class="fa-solid fa-truck fs-1 text-primary ms-3"></i>
            </div>

          </div>
        </div>

      </div>

  
      <hr className='text-secondary ' />



      <div class="row mt-5">

    <div class="col-lg-3 col-md-12 ps-5">
    <div class="footer-about">
        <h5 className='fw-bold'>About Us</h5>
        <p class="text-secondary"> We know there are a lot of threa  developers our but we pride into a  firm in the industry.</p>
    </div>
</div>

<div class="col-lg-3 col-md-12 ps-5">
    <div class="footer-feature footer-links">
        <h5 className='fw-bold'>feature</h5>
        <ul class="list-unstyled">
            <li><Link className='text-decoration-none text-dark'>about us</Link></li>
            <li><Link className='text-decoration-none text-dark'>Terms Condition</Link></li>
            <li> <Link className='text-decoration-none text-dark'>Best Products</Link></li>
        </ul>
    </div>
</div>

<div class="col-lg-3 col-md-12 ps-5">
    <div class="footer-feature footer-links">
        <h5 className='fw-bold'>General Links</h5>
        <ul class="list-unstyled">
            <li><Link className='text-decoration-none text-dark'>Blog</Link></li>
            <li><Link className='text-decoration-none text-dark'>Tracking Order</Link></li>
            <li> <Link className='text-decoration-none text-dark'>Become Seller</Link></li>
        </ul>
    </div>
</div>

<div class="col-lg-3 col-md-12 ps-5">
    <div class="footer-feature footer-links">
        <h5 className='fw-bold'>Helpful</h5>
        <ul class="list-unstyled">
            <li><Link className='text-decoration-none text-dark'>Flash Sale</Link></li>
            <li><Link className='text-decoration-none text-dark'>FAQ</Link></li>
            <li> <Link className='text-decoration-none text-dark'>Support</Link></li>
        </ul>
    </div>
</div>
      </div>




      <hr className='text-secondary ' />

        <div className="row ">

          <div className="col-md-12 mb-5 mt-3">

          <div className="social text-center ">

            <Link to={'https://www.facebook.com/profile.php?id=100007580614645'} target='_target'><i class=" fa-brands fa-facebook fs-2 FB px-3 text-primary"></i></Link>
            <Link to={'https://wa.me/01152762201'} target='_target'><i class=" fa-brands fa-whatsapp fs-2 WH text-success  px-3"></i></Link>
            <Link to={'https://www.linkedin.com/in/ahmed-emad-a777a81a2/'} target='_target'><i class=" fa-brands fa-linkedin fs-2 LI text-primary px-3"></i></Link>
            <Link target='_target'><i class=" fa-brands fa-twitter  fs-2 TW text-info px-3"></i></Link>
          
          
          
          
          </div>


        </div>

      </div>

      </div>  
  </footer>

  
  </>
}
