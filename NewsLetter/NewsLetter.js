import React from 'react'
import './NewsLetter.css';
function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>
            Get Exclusive offers to the email
        </h1>
        <p>subscribe to our newletter and stay update</p>
        <div>
            <input type="email" placeholder='Your Emailid'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter