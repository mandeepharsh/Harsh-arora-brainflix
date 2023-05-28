// Importing componets being used in the main seciton
import CommentCard from "../CommentCard/CommentCard"
import CommentInput from "../CommentInput/CommentInput";
import VideoDetails from "../VideoDetails/VideoDetails";

// Scss file
import "./VideoReview.scss";

const VideoReview = ({selectedVideo,commentDeleteHandler,commentAddHandler}) => {
   
 const commentsToDisplay = selectedVideo.comments.sort((a,b)=> 
 a.timestamp > b.timestamp ? -1 : 0 
 );
  
  return (
    <div className="reviews">
    <VideoDetails selectedVideo = {selectedVideo} />
    <span className="reviews__count">{selectedVideo.comments.length } Comments</span>
    <CommentInput commentAddHandler ={commentAddHandler}/>
      <div className="reviews__comments">
      {commentsToDisplay.map((video) =>{
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
