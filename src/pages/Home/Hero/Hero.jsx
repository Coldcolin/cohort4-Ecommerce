import "./Hero.css"
import illustration from "../../../assets/illustration.png"

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroHolder">
        <div className="HeroLeft">
          <div className="HeroContentHolder">
          <h1>
            Shop your favorite Products from one Place
          </h1>
          <p>
            We are offering 15% on 15k products for a limited period, search for them in store
          </p>
          <button>
            Explore Now
          </button>
          </div>
        </div>
        <div className="HeroRight">
          <img src={illustration} alt="illustration"/>
        </div>
      </div>
    </div>
  )
}

export default Hero