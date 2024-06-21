import "./CategoryTop.css";
import category from "../../assets/category.png"

const CategoryTop = () => {
  return (
    <div className='CategoryTopContainer'>
        <img src={category} alt="pick an item"/>
    </div>
  )
}

export default CategoryTop