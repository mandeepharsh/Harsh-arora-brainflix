// Importing icons
import likeIcon  from "../../assets/images/icons/likes.svg";
import viewsIcon  from "../../assets/images/icons/views.svg";

// importing scss file 
import "./VideoDetails.scss";

const VideoDetails = ({selectedVideo}) => {
    const{title,channel,timestamp,likes,views,description} = selectedVideo
  return (
    <div className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <div className="video-details__stats">
        <div className="video-details__sub-stats">
            <span className="video-details__tag video-details__tag--featured">By {channel}</span>
            <span className="video-details__tag">{new Date(timestamp).toLocaleDateString()}</span>
        </div>
        <div className="video-details__sub-stats">
            <span className="video-details__tag"><img src={viewsIcon} alt="view icon"/>{views}</span>
            <span className="video-details__tag"><img src={likeIcon} alt="like icon"/>{likes}</span>
        </div>
      </div>
      <p className="video-details__description">{description}</p>
    </div>
  )
}

export default VideoDetails;
