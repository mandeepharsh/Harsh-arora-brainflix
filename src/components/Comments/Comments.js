import CommentCard from "../CommentCard/CommentCard"
import "./Comments.scss";
import img from "../../Assets/Images/Mohan-muruge.jpg"


const Comments = ({selectedVideo}) => {
  return (
    <div className="reviews">
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
