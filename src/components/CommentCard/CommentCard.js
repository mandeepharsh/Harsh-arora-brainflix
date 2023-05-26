import "./CommentCard.scss";
import { timeStamp } from "../../utils/timestamp";

const CommentCard = ({name,date,comment}) => {
const displayDate =  timeStamp(date)

  
  return (
    <div className="comment__card">
      <div className="comment__user-img" />
      <div className="comment__container">
        <h2 className="comment__name">{name}</h2>
        <span className="comment__date">{displayDate}</span>
        <p className="comment__review">{comment}</p>
      </div>    
    </div>
  )
}

export default CommentCard;
