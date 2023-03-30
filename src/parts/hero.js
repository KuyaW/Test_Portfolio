import MyProfile from '../assets/pic/me.jpg';
import Circle from '../asset/circle';

const Hero = () => {
  return (
    <section className="hero" id="home">
        <Circle myClassName="circle1" />
        <Circle myClassName="circle2" />
        <div className="contentHolder">
                <div className="leftSide">
                    <h3>HI, I'M</h3>
                    <h1>BRYAN S. SOLON</h1>
                    <h4>WEB DEVELOPER</h4>
                    <button>EXPLORE</button>
                </div>
                <div className="rightSide">
                    <img src={ MyProfile } alt="" />
                </div>
        </div>
    </section>
  )
}

export default Hero
