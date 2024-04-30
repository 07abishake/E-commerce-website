import React from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
function Fotter() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>ShoPpinG</p>
        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>office</li>
            <li>company</li>
            <li>contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='fotter-icons-container'>
                <img src={instagram_icon } alt=''/>
            </div>
            <div className='fotter-icons-container'>
                <img src={pintester_icon} alt=''/>
            </div>
            <div className='fotter-icons-container'>
                <img src={whatsapp_icon } alt=''/>
            </div>
        </div>
      <div className='footer-copyright'>
        <hr/>
        <p>
            Copyright @2024-All Right  Reserved
        </p>
      </div>
    </div>
  )
}

export default Fotter
