import sale from "../../assets/sale.jpeg"
import "./cartItems.css"

const CartItems = ({key}) => {
  return (
    <div key={key} className="CartItemContainer">
        <div className="CartItemImage">
            <img src={sale} alt="sale"/>
        </div>
        <div className="CartDetails">
            <h3>Big Bag</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis repellendus et voluptate nam cumque doloremque labore autem, soluta hic?</p>
            <div className="CartItemsInfo">
                <p>#4500</p>
                <button className="CartItemDelete">Delete</button>
                <div className="CartActions">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems