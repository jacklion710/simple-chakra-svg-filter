// pages/example.js
import React from 'react';
import { applySvgFilter } from '../components/SVGFilter';

const Home = () => {
  return (
    <div>
      {applySvgFilter('/next.svg', 'myFilter', '#ff0000', { width: 300, height: 200 })}
      {applySvgFilter('/vercel.svg', 'myFilter', '#00ff00', { width: 300, height: 200 })}
    </div>
  );
};

export default Home;
