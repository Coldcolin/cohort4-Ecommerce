import sale from "../../assets/sale.jpeg"
import "./cartItems.css"
import { EcommerceContext } from "../../api/contextApi"
import { useContext } from "react"

const CartItems = ({info}) => {
    const {dispatch} = useContext(EcommerceContext)
  return (
    <div key={info?.id} className="CartItemContainer">
        <div className="CartItemImage">
            <img src={info?.images?.[0]} alt="sale"/>
        </div>
        <div className="CartDetails">
            <h3>{info?.title}</h3>
            <p>{info?.description}</p>
            <div className="CartItemsInfo">
                <p>#{info?.price}</p>
                <button className="CartItemDelete">Delete</button>
                <div className="CartActions">
                    <button onClick={()=> dispatch({type: "decrease QTY", payload:{id: info?.id}})}>-</button>
                    <p>{info?.QTY}</p>
                    <button onClick={()=> dispatch({type: "increase QTY", payload:{id: info?.id}})}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems