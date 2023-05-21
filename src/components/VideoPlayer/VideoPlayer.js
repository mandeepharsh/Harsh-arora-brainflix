import "./VideoPlayer.scss"

const VideoPlayer = ({selectedVideo}) => {
  return (
    <div className="video" >
    <video className="video__player" poster={selectedVideo.image} controls>
    </video>
    </div>
  )
}

export default VideoPlayer;
