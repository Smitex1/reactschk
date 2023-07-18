import React from 'react';
import backgroundImage from './image/background.jpg';

function MyComponent() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      ></div>
  )
    }



     export default MyComponent 