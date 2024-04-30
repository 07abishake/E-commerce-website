import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay({ product }) {
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        //console.log("Adding product to cart:", product.id);
        addToCart(product.id);
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {/* This is where your list of thumbnail images goes */}
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="productdisplay-img">
                    {/* This is where your main image goes */}
                    <img className="productdisplay-main-img" src={product.image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
                {/* This is where the right-side content goes */}
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start">
                    {/* Star ratings go here */}
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(6)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    {/* Price information goes here */}
                    <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                    <div className='productdisplay-right-prices-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    {/* Product description goes here */}
                    {product.description}
                </div>
                <div className='productdisplay-right-size'>
                    {/* Size selection goes here */}
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>

                <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
                <p className='productdisplay-right-category'><span>Tags:</span> {product.tags}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
