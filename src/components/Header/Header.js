import logo from "../../Assets/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import uploadIcon from "../../Assets/Icons/upload.svg"
import ProfileImage from "../ProfileImage/ProfileImage";
import img from "../../Assets/Images/Mohan-muruge.jpg"

const Header = () => {
  return (
    <nav className = "nav-bar">
      <img className = "nav-bar__logo" src ={logo} alt = "Logo"/>
      <div>
      <input className = "nav-bar__search-field" />
      <ProfileImage  imgSrc={img}/>
      <Button className = "nav-bar__button" description="UPLOAD" iconDescritpion="Upload Icon" icon={uploadIcon} />
      </div>
    </nav>
  )
}

export default Header
