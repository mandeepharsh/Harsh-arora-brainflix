import { Link } from "react-router-dom"
import "./NotFound.scss"
const NotFound = () => {
  return (

      <div className="not-found">
      <h1 className="not-found__title">404 - Page Not Found</h1>
      <p className="not-found__description">
        The requested page does not exist.
      </p>
      <Link to="/" className="not-found__link">
        Go back to homepage
      </Link>
    </div>
    
  )
}

export default NotFound
