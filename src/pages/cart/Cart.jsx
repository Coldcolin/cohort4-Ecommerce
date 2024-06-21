import CartItems from "../../components/cartItems/CartItems";
import "./cart.css"

const Cart = () => {
    const cartItems = Array(5).fill(0).map((_, i) => i + 1);
  return (
    <div className="CartContainer">
        <div className="CartInfo">
            <div>Total: #80000</div>
            <div className="CartClear">Clear Cart</div>
            <div>Total Quantity: 10</div>
        </div>
        <div className="CartHolder">
            {
                cartItems.map((e, i)=>(
                    <CartItems key={i}/>
                ))
            }
        </div>
    </div>
  )
}

export default Cart