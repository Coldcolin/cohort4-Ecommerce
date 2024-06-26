import { Link } from "react-router-dom"
import "./card.css"

const Card = ({id, details}) => {
    // console.log("key", id)
  return (
    <div key={id} className="CardHolder">
        <img src={details?.image} alt="sale"/>
        <Link className="CardButton" to={`/category/${id}`}>{details?.name}</Link>
    </div>
  )
}

export default Card