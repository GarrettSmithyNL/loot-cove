import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar'; 
import ScrollBox from './ScrollBox'; 
import TrendingNow from './TrendingNow'; 
import GamesByGenre from './GamesByGenre'; 

const HomePage = () => {
    const location = useLocation();
    const genreRef = useRef(null); // Create a ref
  
    useEffect(() => {
      if (location.state?.scrollTo === 'GamesByGenre') {
        genreRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the ref when the component mounts
      }
    }, [location]);
  
    return (
      <div>
        <NavBar />
        <ScrollBox />
        <TrendingNow />
        <div ref={genreRef}>
          <GamesByGenre />
        </div>
      </div>
    );
  };
  
  export default HomePage;