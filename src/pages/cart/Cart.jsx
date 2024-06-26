import CartItems from "../../components/cartItems/CartItems";
import "./cart.css"
import { useContext, useEffect } from "react";
import { EcommerceContext } from "../../api/contextApi";

const Cart = () => {
    const {cart, dispatch, total} = useContext(EcommerceContext)
    const cartItems = cart;
    
  return (
    <div className="CartContainer">
        <div className="CartInfo">
            <div>Total: #{total}</div>
            <div className="CartClear">Clear Cart</div>
            <div>Total Quantity: {cart.length}</div>
        </div>
        <div className="CartHolder">
            {
                cartItems.map((e)=>(
                    <CartItems key={e?.id} info={e}/>
                ))
            }
        </div>
    </div>
  )
}

export default Cart