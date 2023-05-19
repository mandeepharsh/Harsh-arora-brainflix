import "./VideoCard.scss";



const VideoCard = ({image,title,channel,id,chnageSelctedVideo}) => {
  return (
    <div onClick={() => chnageSelctedVideo(id)} className="video-card">
      <img className="video-card__thumbnail" alt={title} src={image}/>
      <div className="video-card__description">
      <h3 className="video-card__title">{title}</h3>
      <span className="video-card__channel">{channel}</span>
      </div>
    </div>
  )
}
export default VideoCard;
