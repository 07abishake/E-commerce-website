import React from 'react';
import './DescriptionBox.css';

function DescriptionBox() {
  return (
    <div className='description-box'>
      <div className='description-box-navigator'>
        <div className='description-box-nav-box'>
          Description
        </div>
        <div className='description-box-nav-box-fade'> Reviews (6)</div>
        
         
      </div>
      <div className='description-box-description'>
        <p>An e-commerce website is the online sales platform of my project.</p>
        <p>Introducing our latest addition to the wardrobe essentials - the Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse. Elevate your everyday style with this chic and versatile blouse, featuring a flattering peplum hem and feminine flutter sleeves. Crafted from premium materials, this blouse offers both comfort and sophistication. Whether you're dressing up for a special occasion or keeping it casual, this blouse is sure to become a staple in your closet. Shop now and add a touch of elegance to your wardrobe!</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
