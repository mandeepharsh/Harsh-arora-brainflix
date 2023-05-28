
import userImage from "../../assets/images/Mohan-muruge.jpg";


import "./CommentInput.scss"

const CommentInput = ({commentAddHandler}) => {
  const onSumbitHandler =(e) =>{
    e.preventDefault();
    if(!e.target.comment.value.trim()){
      return;
    }
    const currentComment = {
      name : "amrinder gill",
     comment : e.target.comment.value
    }
    e.target.comment.value ="";
    commentAddHandler(currentComment)
  }
  return (
    <div className="comment-input">
        <img className ="comment-input__profile-img" alt ="proflie " src={userImage}/>
         <form onSubmit={onSumbitHandler} className="comment-input__content" >
        <div className="comment-input__text-area">
            <p className="comment-input__label">join the description</p>
            <textarea className="comment-input__field" name="comment" placeholder="Add a new comment"/>
        </div>
        <button className="comment-input__button" >Comment</button>
        </form>
    </div>
  )
}

export default CommentInput;
