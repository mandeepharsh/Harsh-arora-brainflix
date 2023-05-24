import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';

// Components
import HomePage from './pages/HomePage/HomePage';

// Importing Json Files
// import videos from "./data/video.json";
import videoDetails from "./data/video-details.json";
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import Header from './components/Header/Header';


function App() {
  
  const url = "https://project-2-api.herokuapp.com";
  const api_key =  "?api_key=cb1e0e79-3d88-4142-9e83-149e0aee67e7";
  const [videos, setVideos] = useState([])
  const [selectedVideo , setSelectedVideo ] = useState(videoDetails[0])

  useEffect(() =>{
    axios
    .get(url + "/videos" + api_key)
    .then((res) => setVideos(res.data))
  })
    
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
    <BrowserRouter>
         <Header/>
     <Routes>
       <Route path='/' element={ <HomePage chnageSelectedVideo={chnageSelectedVideo} 
              filteredVideos = {filteredVideos}
              selectedVideo = {selectedVideo}/>} />
       <Route path='/:id' element = {<HomePage/>}/>       
       <Route path ="/upload" element = {<VideoUploadPage/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
