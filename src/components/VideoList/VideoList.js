import VideoCard from "../VideoCard/VideoCard";
import videos from "../../data/video.json";
import "./VideoList.scss"
const VideoList = () => {
  console.log(videos)
  return (
    <div className="video-list">
     <h3 className="video-list__title">{"next videos".toUpperCase()}</h3>

    {videos.map((video)=>
        
        <VideoCard key={video.id} 
                   title ={video.title} 
                   channel = {video.channel}
                   image = {video.image} />
    )}
    </div>
 
  )
}

export default VideoList;
