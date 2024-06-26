import Hero from "./Hero/Hero";
import "./Home.css"
import Body from "./body/Body";

const Home = () => {
  return (
    <div className="HomeContainer">
      <Hero/>
      <Body/>
    </div>
  )
}

export default Home