
import { useState } from 'react';
import './App.scss';

// Components
import Header from './components/Header/Header';

import VideoList from './components/VideoList/VideoList';

// Importing Json Files
import videos from "./data/video.json"
import videoDetails from "./data/video-details.json"
import HeroVideo from './components/HeroVideo/HeroVideo';
import Comments from './components/Comments/Comments';



function App() {
  
  const [selectedVideo , setSelectedVideo ] = useState(videoDetails[0])
  
 const filteredVideos = videos.filter((video) => 
      video.id !== selectedVideo.id
 )

  return (
    <div className="App">
    <Header/>
    <HeroVideo selectedVideo = {selectedVideo}/>
    <Comments selectedVideo = {selectedVideo}/>
    <VideoList  videos ={filteredVideos}/>
    </div>
  );
}

export default App;
