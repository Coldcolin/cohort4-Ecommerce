import Header from "../../components/Header/Header"
import "./details.css";
import theImage from "../../assets/sale.jpeg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Items from "../../components/items/Items";

const Details = () => {
  const {id}= useParams()
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
  
    const getProduct=async()=>{
      try{
        setLoading(true)
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setItem(res?.data);
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      getProduct()
    },[])
  return (
    <div className="DetailsContainer">
        {
          loading? <div className="DetailsImage">Loading...</div>:<>
            <div className="DetailsImage">
                <img src={item?.images?.[0]} alt="detail Image"/>
            </div>
            <button className="DetailButton">Add to Cart</button>
            <div className="DetailsDetails">
                <h1>{item.title}</h1>
                <div>
                    <p>{item.description}</p>
                </div>
            </div>
          </>
        }
    </div>
  )
}

export default Details