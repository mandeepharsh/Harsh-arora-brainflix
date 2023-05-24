
import { useState } from 'react';
import './App.scss';

// Components
import HomePage from './pages/HomePage/HomePage';

// Importing Json Files
import videos from "./data/video.json";
import videoDetails from "./data/video-details.json";


function App() {
  
  const [selectedVideo , setSelectedVideo ] = useState(videoDetails[0])
    
  const chnageSelectedVideo = (id)  => {
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
    <HomePage chnageSelectedVideo={chnageSelectedVideo} 
              filteredVideos = {filteredVideos}
              selectedVideo = {selectedVideo}
    />
   </>
  );
}

export default App;
