import logo from "../../Assets/Logo/BrainFlix-logo.svg";
import img from "../../Assets/Images/Mohan-muruge.jpg"

import './header.scss';
const Header = () => {
  return (
    <nav className = "nav-bar">
      <img className = "nav-bar__logo" src ={logo} alt = "Logo"/>
      <form className = "nav-bar__form-field">
      <input placeholder="Search" className = "nav-bar__search-bar"/>
      <img className ="nav-bar__profile-img" alt ="proflie " src={img}/>
      <button className="nav-bar__button">
        {"upload".toUpperCase()}
    </button>
      </form>
    </nav>
  )
}

export default Header
