import { useEffect, useState, useContext } from "react";
import Card from "../../../components/card/Card"
import "./body.css";
import axios from "axios"
import {EcommerceContext} from "../../../api/contextApi"

const Body = () => {
  const {cart}= useContext(EcommerceContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories=async()=>{
    try{
      setLoading(true)
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setItems(res?.data);
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getCategories();
  },[])
  
  return (
    <div className="BodyContainer">
        <h3>Browse through our top items</h3>
        {
          loading? <div className="BodyCardHolder">Loading...</div>:<div className="BodyCardHolder">
          {
            items.map((e)=>(
              <Card key={e?.id} id={e?.id} details={e}/>
            ))
          }
          </div>
        }
    </div>
  )
}

export default Body