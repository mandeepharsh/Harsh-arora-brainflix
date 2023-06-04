import { useState } from "react"
import {useNavigate } from "react-router-dom";
import axios from "axios";

import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Overlay from "../Overlay/Overlay"
import "./UploadForm.scss"
import { URL } from "../../utils/api";

const UploadForm = () => {
    const[overlay,setOverlay] = useState(false);
    const[title,setTitlte] = useState("");
    const[description,setDescription] = useState("");
    const[formSumbited,setFormSumbited] = useState(false);

    const navigate = useNavigate();

const isTitleValid = () => {
  if (!title.trim() ) {
    return false;
  }
  return true;
};

const isDescriptionValid = () => {
  if ( !description.trim()) {
    return false;
  }
  return true;
};

    const isFormValid = () =>{
      
      if(!isTitleValid()){
        return false;
      }

      if(!isDescriptionValid()){
        return false;
      }
     return true;
    }

 const navigateToHome = () =>{
   navigate("/")
 }   

    const onSumbitHandler = (event) =>{
      event.preventDefault();
      setFormSumbited(true)
      if(isFormValid()){
      
        axios.post(URL + "/videos" ,{
          title : title,
          description : description
        })
        .catch((err)=>{
          console.log(err);
        })
         setOverlay(true)
         setTimeout(()=> navigateToHome(),2000);
      }  
      
     }


  return (
    <div className="upload">
    <h1 className="upload__title">Upload Video</h1>
    <div className="upload__main">
    <div className="upload__image-container">
        <h3 className="upload__image-title">video thumbnail</h3>
        <img   src={thumbnail} className="upload__image" alt="upload thumbnail"/>
    </div>
    <form className="upload__form" onSubmit={onSumbitHandler}>
        <label className="upload__label">
             Title your video
            <input type="text" 
                   name="title" 
                   placeholder="Add a title to your video"
                   className={formSumbited && !isTitleValid() ?  "upload__input upload__input--invalid" : "upload__input" }                  
                   onChange={(event) => {
                    setTitlte(event.target.value)
                   }} 
                   />
        </label>
        <label className="upload__label upload__label--divider">
             Add a video description
            <textarea type="text"
                      name="description" 
                      placeholder="Add a description to your video" 
                      className={formSumbited &&!isDescriptionValid() ?  "upload__input upload__input--invalid upload__input--area":"upload__input upload__input--area" }              
                      onChange={(event)=> {
                        setDescription(event.target.value)
                      }}  
                      />
        </label>
        <hr className="upload__divider-line"/>
        <div className="upload__button-container">
        <button className="upload__cancel-btn" 
                type="button"
                onClick = {navigateToHome}
                >cancel</button>
        <button className="upload__publish-btn" type="sumbit">publish</button>
        </div>
    </form>
    </div>
    {overlay ?<Overlay/> : null}
  </div>
  )
}

export default UploadForm
