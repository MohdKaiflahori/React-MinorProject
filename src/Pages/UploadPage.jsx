import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Upload.css';
import image from '../Assets/logo.png';
import getDataFromLS from '../utils/dataFromLs';

export default function UploadPage() {
  async function encodeImageFileAsURL(event) {
    event.preventDefault();
    alert('You upload the image');
    const file = event.target[0].files;
    const img = getDataFromLS('img');
    console.log('img', img);
    const reader = new FileReader();
    console.log(file);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < file.length; i++) {
      await new Promise((resolve, reject) => {
        reader.onloadend = () => {
          img.push(reader.result);
          resolve();
        };
        reader.readAsDataURL(file[i]);
      });
    }
    console.log('img1', img);
    localStorage.img = JSON.stringify(img);
  }
  const navigate = useNavigate();
  function galleryPage() {
    navigate('/gallery');
  }
  return (
    <>
      <div className="header">
        <img src={image} id="head" alt="" />
        <h3>Upload your memories and save for lifetime</h3>
        <button className="button-1" onClick={galleryPage}>
          Gallery
        </button>
      </div>
      <form className="maindiv" onSubmit={encodeImageFileAsURL}>
        <div className="file-input">
          <input type="file" multiple id="inputtag" accept="image/*" required />
          <span className="button-2">Choose</span>
          <span className="label">Click here to select an image</span>
        </div>
        <div className="secondDiv">
          <h2 className="bottom-line">You want to upload the image</h2>
          <input type="submit" value="Upload" className="button-3" />
        </div>
      </form>
    </>
  );
}
