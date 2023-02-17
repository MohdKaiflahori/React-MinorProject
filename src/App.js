import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './Pages/GalleryPage';
import UploadPage from './Pages/UploadPage';
import Favorite from './Pages/Favorite';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
