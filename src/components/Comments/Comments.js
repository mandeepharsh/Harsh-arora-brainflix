import CommentCard from "../CommentCard/CommentCard"

const Comments = ({selectedVideo}) => {
  console.log(selectedVideo)
  return (
    <>

    <div className="inputForm">
       <img/>
       <input/>
       <button></button>
      </div>
      {selectedVideo.comments.map((video) =>{
       return(  <CommentCard name = {video.name}
                             date = {video.timestamp}
                             comment= {video.comment}
        />)
      })}
 
    </>
  )
}

export default Comments
