import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss"
const VideoList = ({videos,chnageSelctedVideo}) => {
  

  return (
    <div className="video-list">
     <h3 className="video-list__title">{"next videos".toUpperCase()}</h3>

    {videos.map((video)=>
        <VideoCard 
                   id={video.id}
                   key={video.id} 
                   title ={video.title} 
                   channel = {video.channel}
                   image = {video.image}
                   chnageSelctedVideo= {chnageSelctedVideo}/>
    )}
    </div>
 
  )
}

export default VideoList;
