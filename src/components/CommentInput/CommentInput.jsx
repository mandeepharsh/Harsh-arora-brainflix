import userImage from "../../Assets/Images/Mohan-muruge.jpg";


import "./CommentInput.scss"

const CommentInput = () => {
  return (
    <div className="comment-input">
        <img className ="comment-input__profile-img" alt ="proflie " src={userImage}/>
         <form className="comment-input__content">
        <div className="comment-input__text-area">
            <p className="comment-input__label">join the description</p>
            <textarea className="comment-input__field" placeholder="Add a new comment"/>
        </div>
        <button className="comment-input__button" >Comment</button>
        </form>
    </div>
  )
}

export default CommentInput;
