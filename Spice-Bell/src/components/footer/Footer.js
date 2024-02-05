import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container2">
          <div className="row">
            <div className="col">
              <h4>Get in Touch</h4>
              <ul className="list-unstyled">
                <li class="fa-solid fa-phone ">--+91 123456789</li>
                <br />
                <li class="fa-solid fa-envelope ">--spicebell@gmail.com</li>

              </ul>
            </div>

            <div className="col">
              <h4>FOLLOW US</h4>
              <ul className="list-unstyled">
                <h5>follow us in this social media platform</h5>

                <i class="fa-brands fa-twitter"> --Twitter</i>
                <br />
                <i class="fa-brands fa-instagram">--Instagram</i>
                <br />
                <i class="fa-brands fa-linkedin-in">--Linkedin</i>
              </ul>
            </div>
            <div className="col">
              <h4>Open Hours</h4>
              <ul className="list-unstyled">
                <li  >24hr open</li>
                <li class="fa-solid fa-clock">--Any Time Service</li>
                <br />
                <li class="fa-solid fa-location-dot">--AnyWhere Service</li>
                <br />
                <i class="fa-solid fa-truck"></i>--<i class="fa-solid fa-utensils"></i>---<i class="fa-solid fa-box"></i>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              website Terms | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>



    </>

  )
}

export default Footer