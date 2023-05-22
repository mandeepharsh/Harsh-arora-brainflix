import "./CommentCard.scss";

const CommentCard = ({name,date,comment}) => {
 
 let currentDate = new Date().getTime();
 let commentDate = date;
 let displayDate = "";

 let timeDiffernce = currentDate - commentDate;

 let days = Math.floor(timeDiffernce/1000/60/60/24);
 let hours = Math.floor(timeDiffernce/1000/60/60);
 let minutes = Math.floor(timeDiffernce/1000/60);
 let second = Math.floor(timeDiffernce/1000);

if(minutes < 60){
 return displayDate = `${second} seconds ago ` ;
}else if (hours < 60){
  return displayDate = `${hours} hours ago`
}else if (days < 30){
 displayDate = `${days} days ago`
}else if (days < 365){
  displayDate = `${Math.floor(days/30)} months ago`
}else if( days > 365){
  displayDate = ` ${Math.floor(days/365)} year ago`
}
  
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
