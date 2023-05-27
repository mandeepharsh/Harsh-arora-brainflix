import { useState } from "react"
import {useNavigate } from "react-router-dom";

import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Overlay from "../Overlay/Overlay"
import "./UploadForm.scss"

const UploadForm = () => {
    const[overlay,setOverlay] = useState(false);
    const navigate = useNavigate();
    const onSumbitHandler = (event) =>{
      event.preventDefault();
      const title = event.target.title.value.trim();
      const description = event.target.description.value.trim();
      if(title === "" || description === ""){
          return true
      }
      setOverlay(true)
      setTimeout(()=>{ navigate("/")},2000) 
     }


  return (
    <div className="upload">
    <h1 className="upload__title">Upload Video</h1>
    <div className="upload__main">
    <div className="upload__image-container">
        <h3 className="upload__image-title">video thumbnail</h3>
        <img src={thumbnail} className="upload__image" alt="upload thumbnail"/>
    </div>
    <form className="upload__form" onSubmit={onSumbitHandler}>
        <label className="upload__label">
             Title your video
            <input type="text" name="title" placeholder="Add a title to your video" className= "upload__input" />
        </label>
        <label className="upload__label upload__label--divider">
             Add a video description
            <textarea type="text" name="description" placeholder="Add a description to your video" className="upload__input upload__input--area"/>
        </label>
        <hr className="upload__divider-line"/>
        <div className="upload__button-container">
        <button className="upload__cancel-btn" type="button">cancel</button>
        <button className="upload__publish-btn" type="sumbit">publish</button>
        </div>
    </form>
    </div>
    {overlay ?<Overlay/> : null}
  </div>
  )
}

export default UploadForm
