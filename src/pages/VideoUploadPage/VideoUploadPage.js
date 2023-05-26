import "./VideoUploadPage.scss"
import thumbnail from "../../assets/images/Upload-video-preview.jpg"



const VideoUploadPage = () => {
  return (
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__main">
        <div className="upload__image-container">
            <h3 className="upload__image-title">video thumbnail</h3>
            <img src={thumbnail} className="upload__image" alt="upload thumbnail"/>
        </div>
        <form className="upload__form">
            <label className="upload__label">
                 Title your video
                <input placeholder="Add a title to your video" className="upload__input"/>
            </label>
            <label className="upload__label upload__label--divider">
                 Add a video description
                <textarea placeholder="Add a description to your video" className="upload__input upload__input--area"/>
            </label>
            
        </form>
        </div>
        <div className="upload__button-container">
            <button className="upload__cancel-btn">cancel</button>
            <button  className="upload__publish-btn">publish</button>
            </div>
      </div>
    </>
  )
}

export default VideoUploadPage
