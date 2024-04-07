import { useRef, useEffect, useState } from 'react';
import { getGameById } from '../data/api.js'; // Replace './api' with the actual path to api.js

// Alot of credit to this code goes too A dev named Aneeqa Khan, here is the link to their code that helped me out 
// https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb
const ScrollBox = () => {
  const sliderRef = useRef(null);
  const scrollAmount = window.innerWidth; // sets the scroll amount to a full window length
  const [selectedImage, setSelectedImage] = useState(2); // this makes it so that when the page loads that the program knows its image 2 so the bar is green in the center
  const gameIds = [5, 25, 15]; // specified 3 game id to display for the 3 images
  const images = gameIds.map((gameId) => {
    const game = getGameById(gameId);
    if (game) {
      return { id: game.id, url: game.pictures.thumbnail }; // Assuming each game has a 'pictures' object with a 'thumbnail' property
    } else {
      console.log(`No game found with ID ${gameId}`);
      return null;
    }
  }).filter(Boolean);

// when the page is loaded it will scroll to the right by the amount specified, in this case to the center pic as there are only
  useEffect(() => {
    const container = sliderRef.current;
    container.scrollLeft = window.innerWidth; 
  }, []);

 // allows the scroll left button to fully scroll to the right a full screen width
  const scrollLeft = () => {
    const container = sliderRef.current;
    if (selectedImage === 1) {
      container.scrollLeft = scrollAmount * (images.length - 1);
      setSelectedImage(images.length);
    } else if (container.scrollLeft > 0) {
      container.scrollLeft -= scrollAmount;
      setSelectedImage((prevSelectedImage) => prevSelectedImage - 1);
    }
  };

  // allows the scroll right button to fully scroll to the right a full screen width
  const scrollRight = () => {
    const container = sliderRef.current;
    if (selectedImage === images.length) {
      container.scrollLeft = 0;
      setSelectedImage(1);
    } else if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
      container.scrollLeft += scrollAmount;
      setSelectedImage((prevSelectedImage) => prevSelectedImage + 1);
    }
  };

  return (
    <>
    <div>   
        <h2 className = "fireSaleHead">Easter Fire Sale !</h2>
    </div>
      <div className="scrollBox">
        <button style = {{marginRight: "80px"}} className="nav-btn" onClick={scrollLeft}>
          <img src="/left.svg" alt="left arrow button" />
        </button>
        <div className="fireSaleContainer" ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className = "fireSaleImageContainer">
              <img className="fireSaleImage" src={image.url} alt="Fire Sale Game" />
            </div>
          ))}
        </div>
        <button style = {{marginLeft: "80px"}} className="nav-btn" onClick={scrollRight}>
          <img src="/right.svg" alt="right arrow button" />
        </button>
      </div>
      {/* Bar that highlights to show which Game of the Easter fire sale you are on by highlighting green */}
      <div className="bar-container">
        <div className={`barBox ${selectedImage === 1 ? 'active' : ''}`}></div>
        <div className={`barBox ${selectedImage === 2 ? 'active' : ''}`} ></div>
        <div className={`barBox ${selectedImage === 3 ? 'active' : ''}`}></div>
      </div>
    </>
  );
};

export default ScrollBox;