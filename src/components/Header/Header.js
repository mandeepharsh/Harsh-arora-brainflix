import logo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import img from "../../assets/Images/Mohan-muruge.jpg"


import './Header.scss';
const Header = () => {


  return (
    <nav className = "nav-bar">
      <img className = "nav-bar__logo" src ={logo} alt = "Logo"/>
      <form className = "nav-bar__form-field "  >
      <input placeholder="Search" name="search" className = "nav-bar__search-bar" />
      <img className ="nav-bar__profile-img" alt ="proflie " src={img}/>
      <button className="nav-bar__button">
        {"upload"}
    </button>
      </form>
    </nav>
  )
}

export default Header
