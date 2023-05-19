
import { useState } from 'react';
import './App.scss';

// Components
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList';

// Importing Json Files
import videos from "./data/video.json";
import videoDetails from "./data/video-details.json";




function App() {
  
  const [selectedVideo , setSelectedVideo ] = useState(videoDetails[0])
    
  const chnageSelctedVideo = (id)  => {
   const newSelection =   videoDetails.find((video) =>
       video.id === id 
     )
    setSelectedVideo(newSelection)
  } 

  // Filter the array to remove the video which has been selected
  const filteredVideos = videos.filter((video) => 
      video.id !== selectedVideo.id
  )

  return (
    <>
    <Header/>
    <VideoPlayer selectedVideo = {selectedVideo}/>
    <Comments selectedVideo = {selectedVideo}/>
    <VideoList  videos ={filteredVideos}
                chnageSelctedVideo = {chnageSelctedVideo}
    />
    </>
  );
}

export default App;
