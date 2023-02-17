import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Favorite.css';
import getDataFromLS from '../utils/dataFromLs';

export default function Favorite() {
  const [favImg, setFavImg] = React.useState([]);
  React.useEffect(() => {
    const favImg = getDataFromLS('favimg');
    if (favImg && favImg.length > 0) {
      setFavImg(favImg);
    }
  }, []);
  const navigate = useNavigate();
  function galleryPage() {
    navigate('/gallery');
  }
  return (
    <>
      <div className="favHeader">
        <h3>Your Favorite Images</h3>
        <button className="button-5" onClick={galleryPage}>Back</button>
      </div>
      <div id="favImg">
        {favImg.map((element, i) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img key={i} src={element} id={i} alt={`image-${i}`} />
        ))}
      </div>
    </>
  );
}
