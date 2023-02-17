/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Gallery.css';
import getDataFromLS from '../utils/dataFromLs';

export default function GalleryPage() {
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    const img = getDataFromLS('img');
    if (img && img.length > 0) {
      setImage(img);
    }
  }, []);

  const handleDoubleClick = (e) => {
    const id = e.target.id;
    alert('You Added a Image in your favorite images');
    const img = getDataFromLS('img');
    const favImg = getDataFromLS('favimg');
    console.log('favImg :', favImg);
    favImg.push(img[+id]);
    localStorage.favimg = JSON.stringify(favImg);
  };
  const navigate = useNavigate();
  function uploadPage() {
    navigate('/');
  }
  function favoritePage() {
    navigate('/favorite');
  }
  return (
    <>
      <div className="galHeader">
        <button className="button-4" onClick={uploadPage}>
          Back
        </button>
        <h3>Your memories are store here</h3>
        <button className="button-4" onClick={favoritePage}>
          Next
        </button>
      </div>
      <div id="getImg">
        {image.map((x, i) => (
          <img key={i} src={x} id={i} alt={`image-${i}`} onDoubleClick={handleDoubleClick} />
        ))}
      </div>
    </>
  );
}
