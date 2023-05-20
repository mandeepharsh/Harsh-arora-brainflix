import CommentCard from "../CommentCard/CommentCard"
import "./Comments.scss";
import img from "../../Assets/Images/Mohan-muruge.jpg"
import VideoDetails from "../VideoDetails/VideoDetails";


const Comments = ({selectedVideo}) => {
  return (
    <div className="reviews">
    <VideoDetails selectedVideo = {selectedVideo} />
    <span className="reviews__count">{selectedVideo.comments.length } Comments</span>
      <div className="reviews__comments">
      {selectedVideo.comments.map((video) =>{
       return(  <CommentCard key={video.id}
                             name = {video.name}
                             date = {video.timestamp}
                             comment= {video.comment}
        />)
      })}
      </div>
 
    </div>
  )
}

export default Comments
