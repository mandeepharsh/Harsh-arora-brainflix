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
  const [isLoading,setIsLoading] = useState(true)

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;
  const displayVideoId = id || defaultVideoId;
  useEffect(() =>{
    axios
    .get(URL + "/videos" + API_KEY)
    .then((res) => setVideos(res.data))
  },[])

  // Filter the array to remove the video which has been selected
  const filteredVideos = videos.filter((video) => 
      video.id !== displayVideoId
  )

  useEffect(() =>{
    if (!displayVideoId) return;
    axios.get(URL +"/videos/" + displayVideoId + API_KEY)
    .then((res) =>{
      setSelectedVideo(res.data)
      setIsLoading(false)
    })

  },[displayVideoId])

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
    <VideoPlayer selectedVideo = {selectedVideo}/>
    <main className='content-container'>
    <VideoReview selectedVideo = {selectedVideo}/>
    <VideoList   videos ={filteredVideos}
    />
    </main>
    </>

  )
}


export default HomePage
