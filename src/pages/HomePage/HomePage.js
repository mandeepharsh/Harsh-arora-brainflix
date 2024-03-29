// tools
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// API
import { URL } from "../../utils/api";

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
    .get(URL + "/videos" )
    .then((response) => setVideos(response.data))
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
    axios.delete(URL + "/videos/" + displayVideoId + "/comments/" + commentId )
    .then((res) => setTriggerReq(true)  ) 
    .catch((err)=>console.log(err))
  } 

 
  const commentAddHandler = (comment) =>{
    axios.post(URL + "/videos/" + displayVideoId + "/comments" ,comment)
    .then((res) => setTriggerReq(true))
    .catch((err) => console.log(err))
  }


  useEffect(() =>{
    if (!displayVideoId) return;
    axios.get(URL +"/videos/" + displayVideoId )
    .then((res) =>{
      setSelectedVideo(res.data)
      setIsLoading(false)
      setTriggerReq(false)
      window.scroll({top : 0,behavior :"smooth"})
    }).catch((err)=>{
      console.log(err)
    })
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
                 commentAddHandler ={commentAddHandler}
    />
    <VideoList   videos ={filteredVideos}
    />
    </main>
    </>

  )
}


export default HomePage
