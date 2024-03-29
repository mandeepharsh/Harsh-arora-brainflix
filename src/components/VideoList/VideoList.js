import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss"
const VideoList = ({videos}) => {
  

  return (
    <div className="video-list">
     <h2 className="video-list__title">next videos</h2>

    {videos.map((video)=>
        <VideoCard 
                   id={video.id}
                   key={video.id} 
                   title ={video.title} 
                   channel = {video.channel}
                   image = {video.image}
        />
    )}
    </div>
 
  )
}

export default VideoList;
