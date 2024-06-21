import "./items.css"
import { Link } from "react-router-dom"

const Items = ({id, details}) => {
  return (
    <div className="ItemsContainer" key={id}>
        <img src={details?.images?.[0]} alt="sale"/>
        <div className="ItemsInfo">
            <p>{details.title}</p>
            <p>#{details.price}</p>
        </div>
        <div className="ItemsButtons">
            <button>Add to Cart</button>
            <button ><Link to={`/detail/${id}`}>View details</Link></button>
        </div>
    </div>
  )
}

export default Items