import { useRef } from "react";

const Header = () => {
    const navigation = useRef();


    const openPanel = () => {
        navigation.current.style = "width: 50%";
    }

    const closePanel = () => {
        navigation.current.style = "";
    }
  return (
    <header>
               <div className="logo">My Portfolio</div>
               <nav ref={navigation}>
                    <a href="#home" onClick={closePanel}>HOME</a>
                    <a href="#aboutMe" onClick={closePanel}>ABOUT ME</a>
                    <a href="#works" onClick={closePanel}>WORKS</a>
                    <a href="#contactMe" onClick={closePanel}>CONTACT ME</a>
                    <div className="toCloseBtn" onClick={closePanel}> <i className="fa fa-window-close"></i> </div>
               </nav>
               <div className="toOpenBtn" onClick={openPanel} > <i className=" fa  fa-bars"></i> </div>
    </header>
  )
}

export default Header;
