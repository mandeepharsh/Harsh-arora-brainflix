import "./CommentCard.scss";

const CommentCard = ({name,date,comment}) => {
  
  return (
    <div className="comment__card">
      <img className="comment__user-img" />
      <div className="comment__container">
        <h2 className="comment__name">{name}</h2>
        <span className="comment__date">{new Date(date).toLocaleDateString()}</span>
        <p className="comment__review">{comment}</p>
      </div>    
    </div>
  )
}

export default CommentCard;
