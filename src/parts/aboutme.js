import MyProfile from '../assets/pic/me1.jpg';
import Circle from '../asset/circle';

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutMe">
        <Circle myClassName="circle1" />
        <Circle myClassName="circle2" />
        <div className="contentHolder">
                <h1>ABOUT ME</h1>
                <div className="aboutmeHolder">
                    <div className="leftSide">
                        <img src={MyProfile} alt="" />
                    </div>
                    <div className="rightSide">
                        <h1>Welcome to my portfolio page.</h1>
                        <br />
                        <p>
                            I'm a senior high school graduate. Who's
                            exploring the world of web development.
                            
                        </p>
                        <div className="iconHolder">
                            <a href="#someWhere">
                                    <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#someWhere">
                                    <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#someWhere">
                                    <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <button>HIRE ME!</button>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default AboutMe
