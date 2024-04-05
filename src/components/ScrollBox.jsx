import { useRef, useEffect, useState } from 'react';

const ScrollBox = () => {
  const sliderRef = useRef(null);
  const scrollAmount = window.innerWidth; // Assuming each image takes up the full width of the window
  const [selectedImage, setSelectedImage] = useState(2); // this makes it so that when the page loads that the program knows its image 2 so the bar is green in the center
  const images = [
    {
        id: 1,
        url: "https://plus.unsplash.com/premium_photo-1681882526882-c2da94c47783?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        url:"https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D"
    },
];  

// when the page is loaded it will scroll to the right by the amount specified, in this case to the center pic as there are only
  useEffect(() => {
    const container = sliderRef.current;
    container.scrollLeft = 1440; 
  }, []);

  //   allows the scroll left button to fully scroll to the right a full screen width
    const scrollLeft = () => {     // If you push the scroll left button at image 1, it wont do nothing
      if (selectedImage === 1) {
        return; 
      }
    
      const container = sliderRef.current;
      if (container.scrollLeft > 0) {
        container.scrollLeft -= scrollAmount;
        setSelectedImage((prevSelectedImage) => prevSelectedImage - 1); 
      }
    };

//   allows the scroll right button to fully scroll to the right a full screen width
    const scrollRight = () => {    // If you push the scroll right button at image 3, it wont do nothing
      if (selectedImage === 3) {
        return; 
      }

      const container = sliderRef.current;
      if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
        container.scrollLeft += scrollAmount;
        setSelectedImage((prevSelectedImage) => prevSelectedImage + 1); // Update the selected image
      }
    };

  return (
    <>
    <div>   
        <h2 className = "FireSaleHead">Easter Fire Sale !</h2>
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
      <div className="bar-container">
        <div className={`barBox ${selectedImage === 1 ? 'active' : ''}`}></div>
        <div className={`barBox ${selectedImage === 2 ? 'active' : ''}`} ></div>
        <div className={`barBox ${selectedImage === 3 ? 'active' : ''}`}></div>
      </div>
    </>
  );
};

export default ScrollBox;