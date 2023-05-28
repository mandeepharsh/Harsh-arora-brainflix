// tools
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// API
import { API_KEY,URL } from "../../utils/api";

// components
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoReview from "../../components/VideoReview/VideoReview";
import VideoList from "../../components/VideoList/VideoList";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const {id} = useParams();
  
  const [videos, setVideos] = useState([]); 
  const [selectedVideo,setSelectedVideo] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [triggerReq,setTriggerReq] = useState(false);

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;
  const displayVideoId = id || defaultVideoId;
  // Axios request 
  useEffect(() =>{
    axios
    .get(URL + "/videos" + API_KEY)
    .then((res) => setVideos(res.data))
    .catch((err)=>{
      console.log(err)
    })
  },[])

  // Filter the array to remove the video which has been selected
  const filteredVideos = videos.filter((video) => 
      video.id !== displayVideoId
  )

  //on click handler for delete functionality of cimment section 
  const commentDeleteHandler = (commentId) =>{
    axios.delete(URL + "/videos/" + displayVideoId + "/comments/" + commentId + API_KEY)
    .then((res) => setTriggerReq(true)  ) 
    .catch((err)=>console.log(err))
  } 


  useEffect(() =>{
    if (!displayVideoId) return;
    axios.get(URL +"/videos/" + displayVideoId + API_KEY)
    .then((res) =>{
      setSelectedVideo(res.data)
      setIsLoading(false)
      setTriggerReq(false)
    }).catch((err)=>{
      console.log(err)
    })
   window.scrollTo({ top: 0, behavior: 'smooth' })
  },[displayVideoId,triggerReq])

  if(!!isLoading){
    return <Loading/>
  }

  return (
    <>
    <VideoPlayer selectedVideo = {selectedVideo}/>
    <main className='content-container'>
    <VideoReview selectedVideo = {selectedVideo}
                 commentDeleteHandler ={commentDeleteHandler}
    />
    <VideoList   videos ={filteredVideos}
    />
    </main>
    </>

  )
}


export default HomePage
