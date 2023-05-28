// Importing componets being used in the main seciton
import CommentCard from "../CommentCard/CommentCard"
import CommentInput from "../CommentInput/CommentInput";
import VideoDetails from "../VideoDetails/VideoDetails";

// tools
import axios from "axios";

// API
import { API_KEY,URL } from "../../utils/api";
// Scss file
import "./VideoReview.scss";

const VideoReview = ({selectedVideo,commentDeleteHandler}) => {
   
 
  
  return (
    <div className="reviews">
    <VideoDetails selectedVideo = {selectedVideo} />
    <span className="reviews__count">{selectedVideo.comments.length } Comments</span>
    <CommentInput/>
      <div className="reviews__comments">
      {selectedVideo.comments.map((video) =>{
       return(  <CommentCard key={video.id}
                             name = {video.name}
                             date = {video.timestamp}
                             comment= {video.comment}
                             id={video.id}
                             commentDeleteHandler={commentDeleteHandler}
        />)
      })}
      </div>
 
    </div>
  )
}

export default VideoReview;
