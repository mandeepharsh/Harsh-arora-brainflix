import "./VideoPlayer.scss"

const HeroVideo = ({selectedVideo}) => {
  return (
    <div className="hero" >
    <video className="hero__videoPlayer" poster={selectedVideo.image} controls>
    </video>
    </div>
  )
}

export default HeroVideo
