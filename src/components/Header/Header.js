import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import img from "../../assets/Images/Mohan-muruge.jpg"


import './Header.scss';
const Header = () => {


  return (
    <nav className = "nav-bar">
      <Link to="/"> <img className = "nav-bar__logo" src ={logo} alt = "Logo"/></Link>
      <div  className = "nav-bar__form-field "  >
      <input placeholder="Search" name="search" className = "nav-bar__search-bar" />
      <img className ="nav-bar__profile-img" alt ="proflie " src={img}/>
       <Link className="nav-bar__link" to="/upload">
      <button className="nav-bar__button">
      upload
      </button>
      </Link>
      </div>
    </nav>
  )
}

export default Header
