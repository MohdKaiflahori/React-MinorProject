export default function getDataFromLS(type) {
  try {
    let img = localStorage[type];
    if (img) {
      img = JSON.parse(img);
    }
    if (Array.isArray(img) && img.length > 0) {
      return img;
    }
  } catch (error) {
    console.log('error : ', error);
  }
  return [];
}
