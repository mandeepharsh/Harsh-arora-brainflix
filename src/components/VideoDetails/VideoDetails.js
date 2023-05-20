// Importing icons
import likeIcon  from "../../Assets/Icons/likes.svg";
import viewsIcon  from "../../Assets/Icons/views.svg";

// importing scss file 
import "./VideoDetails.scss";

const VideoDetails = ({selectedVideo}) => {
    const{title,channel,timestamp,likes,views,description} = selectedVideo
  return (
    <div className="videoDetails">
      <h1 className="videoDetails__title">{title}</h1>
      <div className="videoDetails__stats">
        <div className="videoDetails__sub-stats">
            <span className="videoDetails__tag videoDetails__tag--featured">{channel}</span>
            <span className="videoDetails__tag">{new Date(timestamp).toLocaleDateString()}</span>
        </div>
        <div className="videoDetails__sub-stats">
            <span className="videoDetails__tag"><img src={viewsIcon} alt="view icon"/>{views}</span>
            <span className="videoDetails__tag"><img src={likeIcon} alt="like icon"/>{likes}</span>
        </div>
      </div>
      <p className="videoDetails__description">{description}</p>
    </div>
  )
}

export default VideoDetails;
