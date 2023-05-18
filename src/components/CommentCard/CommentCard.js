import "./CommentCard.scss";

const CommentCard = ({name,date,comment}) => {
  
  return (
    <div className="comment__card">
      <img className="commment__user-img" src="/"/>
      <div className="comment__container">
        <h2 className="comment__name">{name}</h2>
        <span className="comment__date">{date}</span>
        <p className="comment__review">{comment}</p>
      </div>    
    </div>
  )
}

export default CommentCard;
