import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
render() {
return (
<>
<footer>
  <div className="footer-info">
    <div className="footer-width about-res">
     <div className="text-footer">
      <h3 className='m'>Golden View Dine </h3>
     </div>
      <p >Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.<br /> Sollicitudin </p>

      <div className="social-media">
        <ul>
          <li><a href="/"><img src="../../../assets/Social Icons.svg" alt="" /></a></li>
          <li><a href="/"><img src="../../../assets/Social Icons (1).svg" alt="" /></a></li>
          <li><a href="/"><img src="../../../assets/Social Icons (2).svg" alt="" /></a></li>
        </ul>
      </div>
    </div>

    <div className="footer-width link">
    <h3>Other Links</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms & conditions</li>
        <li>Blogs</li>
        <li>our team</li>
        <li>Our kitchen</li>
      </ul>
    </div>

    <div className="footer-width contact">
    <h3>Contact Us</h3>
    <ul>
      <li><span><img src="../../../assets/ant-design_mail-filled.svg" alt="" /></span>
      <a href="/">Gogreendineservice@gmail.com</a>
      </li>
      <li>
        <span>
          <img src="../../../assets/carbon_location-filled.svg" alt="" />
        </span>
        <p>AZ complex bylane3 Mandari RdMumbai 1100867</p>
        </li>

        <li><span><img src="../../../assets/carbon_phone-filled.svg" alt="" /></span>
      <a href="/">+1800 287 25</a>
      </li>

    </ul>
    </div>


  </div>
</footer>

<section className='newletter'>
  <div className='container flexSB'>
    <div className='left row'>
<img src="../../../assets/bytesize_mail.svg" alt="" />
  <h3>Subscribe to our Newsletter</h3>
    </div>
    <div className='right row'>
      <input type='text' placeholder='Your Email id' />
      <button className='button'>Subscribe</button>

    </div>
  
  </div>
</section>

<div className='legal'>
  <p>Copyright © 2022 Golden Dine website</p>
  <p>All rights reserved</p>
</div>
</>
)
}
}



