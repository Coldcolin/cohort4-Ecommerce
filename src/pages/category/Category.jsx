import { useEffect, useState } from "react"
import CategoryTop from "../../components/CategoryTop/CategoryTop"
import Items from "../../components/items/Items"
import "./category.css"
import { useParams } from "react-router-dom";
import axios from "axios"


const Category = () => {
  const {id}= useParams()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getProducts=async()=>{
      try{
        setLoading(true)
        const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        setItems(res?.data);
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <div className="CategoryHolder">
        <CategoryTop/>
        {
          loading? <div className="CategoryItemsHolder">Loading...</div>:<div className="CategoryItemsHolder">
          {
              items.map((e) => (<Items id={e?.id} details={e}/>))
          }
          </div>
        }
    </div>
  )
}

export default Category