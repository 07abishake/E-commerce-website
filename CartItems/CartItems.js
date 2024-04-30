
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import React, { useContext } from 'react'

function CartItems() {
    const {all_products,CartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>products</p>
        <p>Title</p>
        <p>price</p>
        <p>remove</p>
        <p>quality</p>
        <p>Total</p>
      </div>
      <hr/>
      {Array.isArray(all_products) && all_products.map((e) => {
        if(CartItems[e.id >0])
        {
            return  <div>
            <div className='cartitems-format'>
              <img src={e.image} alt='' className='carticon-product-icon'/>
              <p>
                  {e.name}
              </p>
              <p>
                   ${e.new_price}
              </p>
              <button className='cartitems-quantity'>{CartItems[e.id]}</button>
              <p>{e.new_price*CartItems[e.id]}</p>
              <img src={remove_icon}  onClick={()=>(removeFromCart(e.id))}alt=''/>
            </div>
            <hr/>
          </div>
        }
     })}
    </div>
  )
}
 
export default CartItems