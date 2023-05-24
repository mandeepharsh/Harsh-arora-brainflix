import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoReview from "../../components/VideoReview/VideoReview";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = ({selectedVideo,filteredVideos,chnageSelectedVideo}) => {
  return (
    <>
         <Header/>
    <VideoPlayer selectedVideo = {selectedVideo}/>
    <main className='content-container'>
    <VideoReview selectedVideo = {selectedVideo}/>
    <VideoList   videos ={filteredVideos}
                 chnageSelectedVideo = {chnageSelectedVideo}
    />
    </main>
    </>

  )
}

export default HomePage
